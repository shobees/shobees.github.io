import React from "react";
import Helmet from "react-helmet";
import image from "../img/thumbnail.jpg";

const MetaDecorator = ({ title, description, imageUrl, videoUrl }) => {
  const hostName = "https://shobees.github.io/";
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      {videoUrl ? (
        <meta property="og:video" content={videoUrl} />
      ) : (
        <meta property="og:image" content={imageUrl || hostName + image} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:url"
        content={hostName + window.location.pathname + window.location.search}
      />
    </Helmet>
  );
};

export default MetaDecorator;
