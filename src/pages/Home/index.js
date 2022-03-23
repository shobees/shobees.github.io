import React, { Fragment, useEffect, useState } from "react";
import MetaDecorator from "../../Components/MetaDecorator";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  console.log("response", posts);
  return (
    <Fragment>
      <MetaDecorator
        title={posts.length && posts[0].title}
        description={posts.length && posts[0].body}
      />
      <div>Home</div>;
    </Fragment>
  );
};
export default Home;
