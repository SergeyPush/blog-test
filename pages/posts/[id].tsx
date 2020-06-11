import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import { getOnePost } from "../../redux/posts/postActions";
import styled from "styled-components";

const Title = styled.p`
  font-size: 1.6rem;
  margin-bottom: 30px;
`;

const Body = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #738a94;
`;

const Post = ({ post, getPostById }) => {
  const router = useRouter();
  const { id, title, body, comment } = post;
  const { query } = router;
  useEffect(() => {
    getPostById(query.id);
  }, []);

  return (
    <Layout>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Layout>
  );
};

const mapStateToProps = (state) => ({ post: state.posts.selectedPost });
const mapDispatchToProps = (dispatch) => ({
  getPostById: (id: number) => dispatch(getOnePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
