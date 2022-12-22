import React from "react";
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { TPost } from "types";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = (props) => {
  const renderPostContents = () => {
    if (props.posts.length < 1) return null

    return (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            <p>{post.id}.</p>
            <p>{post.title}</p>
          </li>
        )}
      </ul>
    )
  }

  return (
    <div>
      <h2>POSTの一覧</h2>
      {renderPostContents()}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const response = await fetch("http://api:3000/api/v1/posts", {method: "GET"});
  const posts: TPost[] = await response.json();

  return {
    props: {
      posts: posts.length > 0 ? posts : []
    },
    revalidate: 10,
  };
};

export default Home;