import React, { Fragment } from "react";
import MetaDecorator from "../../Components/MetaDecorator";

const Home = () => {
  return (
    <Fragment>
      <MetaDecorator
        title="title of the card"
        description="description of the card"
        imageUrl="https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g"
      />
      <div>Home</div>;
    </Fragment>
  );
};
export default Home;
