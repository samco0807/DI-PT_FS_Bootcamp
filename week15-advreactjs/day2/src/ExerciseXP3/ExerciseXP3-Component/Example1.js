import React from "react";
import data from "./data.json";

const Example1 = () => {
  const socialMedias = data.SocialMedias;
  return (
    <div>
      <h1>Social Medias</h1>
      {socialMedias.map((socialMedia) => (
        <div key={socialMedia}>
          <a href={socialMedia} target="blank" rel="noopener noreferrer">
            <h2>{socialMedia}</h2>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Example1;