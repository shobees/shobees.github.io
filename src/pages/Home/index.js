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
        videoUrl="https://www.youtube.com/watch?v=5Eqb_-j3FDA&list=RD5Eqb_-j3FDA&start_radio=1"
      />
      <div>Home</div>;
    </Fragment>
  );
};
export default Home;
