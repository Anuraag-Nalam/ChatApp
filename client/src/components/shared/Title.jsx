import React from "react";

const Title = ({
  title = "Chat Application",
  description = "Chat Application",
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

export default Title;
