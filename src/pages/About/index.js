import React, { Fragment } from "react";
import MetaDecorator from "../../Components/MetaDecorator";

const About = () => {
  return (
    <Fragment>
      <MetaDecorator
        title="About Us"
        description="description for about us"
        imageUrl="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"
      />
      <div>About</div>;
    </Fragment>
  );
};
export default About;
