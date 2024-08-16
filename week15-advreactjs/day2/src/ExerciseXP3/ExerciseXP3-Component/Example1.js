import React from "react";
import data from "./data.json";

export const Example1 = () => {
  const SocialMedia = data.socialmedia;
  return (
    <div>
      <h1>Social Medias</h1>
      {SocialMedia.map((SocialMedia) => (
        <div>
          <h2>{SocialMedia}</h2>
        </div>
      ))}
    </div>
  );
};

export default Example1;
