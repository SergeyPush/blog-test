import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import styled from "styled-components";
import { removePost } from "../redux/posts/postActions";

const ListItem = styled.li`
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  padding: 10px;
  position: relative;
`;
const Title = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-bottom: 10px;
`;
const Text = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
  margin-bottom: 10px;
  color: #738a94;
`;
const Trash = styled.i`
  color: red;
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  ${ListItem}:hover & {
    opacity: 1;
  }
`;

const PostItem = ({ post, removePost }) => {
  const { id, title, body } = post;

  const reduceBodyLength = (body) => {
    const bodyText = body.split(" ");

    if (bodyText.length > 40) {
      const text = bodyText.slice(0, 30).join(" ");
      return text;
    }

    return body;
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    removePost(id);
  };
  return (
    <Link href="/posts/[slug]" as={`/posts/${id}`}>
      <ListItem>
        <Title>{title}</Title>
        <Text>{reduceBodyLength(body)}</Text>
        <Trash className="material-icons" onClick={handleRemove}>
          delete
        </Trash>
      </ListItem>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removePost: (id) => dispatch(removePost(id)),
});

export default connect(null, mapDispatchToProps)(PostItem);
