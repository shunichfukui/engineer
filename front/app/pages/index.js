const Home = (props) => {
  return (
    <div>
      <h2>
        POSTの一覧
      </h2>
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

export const getStaticProps = async () => {
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const posts = await response.json();

  return {
    props: {
      posts: posts
    },
  };
}

export default Home;
