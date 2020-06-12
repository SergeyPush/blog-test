import { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { createNewPost } from "../../redux/posts/postActions";
import styled from "styled-components";
import { Post } from "../../redux/posts/postReducer";

import Layout from "../../components/Layout";

const Button = styled.button`
  display: block;
  padding: 10px 20px;
  margin-bottom: 50px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px;
`;

const Textarea = styled.textarea`
  display: block;
  font-family: "Open Sans", sans-serif;
  padding: 12px;
  width: 100%;
  min-height: 300px;
  margin-bottom: 20px;
`;

const New = ({ createPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = { title, body };
    if (title === "" || body === "") {
      return;
    }
    setTitle("");
    setBody("");
    createPost(post);
    router.push("/");
  };
  return (
    <Layout title="Crate New Post">
      <form onSubmit={handleSubmitForm}>
        <Input
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <Textarea
          value={body}
          placeholder="Enter text"
          onChange={(e) => setBody(e.target.value)}
        ></Textarea>
        <br />
        <Button type="submit">Add Post</Button>
      </form>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (post: Post) => dispatch(createNewPost(post)),
});

export default connect(null, mapDispatchToProps)(New);
