import Head from "next/head";
import { connect } from "react-redux";
import { getAllPosts } from "../redux/posts/postActions";
import { useEffect } from "react";
import PostItem from "../components/PostItem";
import Layout from "../components/Layout";
import styled from "styled-components";
import Link from "next/link";

const PostsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding-bottom: 30px;
`;

const Button = styled.button`
  display: block;
  padding: 10px 20px;
  margin-bottom: 50px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

function Home({ posts, getAllPosts }) {
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Link href="/posts/new">
          <Button>Create new Post</Button>
        </Link>
        <PostsList>
          {posts.map((item) => (
            <PostItem key={item.id} post={item}></PostItem>
          ))}
        </PostsList>
      </Layout>
    </div>
  );
}

const mapStateToProps = ({ posts }) => ({ posts: posts.posts });

export default connect(mapStateToProps, { getAllPosts })(Home);
