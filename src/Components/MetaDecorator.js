import React from "react";
import Helmet from "react-helmet";

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:url"
        content={window.location.pathname + window.location.search}
      />
      <meta property="og:type" content="video.movie" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default MetaDecorator;