import React, { FC } from "react";
import { GetStaticProps } from 'next';

type Post = {
  id: number;
  title: string;
}

type Props = {
  posts: Post[];
}

const Home: FC<Props> = (props) => {
  return (
    <div>
      <h2>POSTの一覧</h2>
      <ul>
        {props.posts.map((post) =>
          <li>
            <p>{post.id}.</p>
            <p>{post.title}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const posts = await response.json();

  return {
    props: {
      posts: posts
    },
    revalidate: 10,
  };
};

export default Home;