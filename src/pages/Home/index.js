import React, { Fragment, useEffect, useState } from "react";
import MetaDecorator from "../../Components/MetaDecorator";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  console.log("response", posts)
  return (
    <Fragment>
      <MetaDecorator
        title={posts.length && posts[0].title}
        description={posts.length && posts[0].body}
        imageUrl="https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g"
      />
      <div>Home</div>;
    </Fragment>
  );
};
export default Home;
