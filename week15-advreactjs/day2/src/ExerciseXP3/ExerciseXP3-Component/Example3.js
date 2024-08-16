import React from "react";
import data from "./data.json";

export const Example3 = () => {
  const experiences = data.experience;
  return (
    <div>
      <h1>Social Medias</h1>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h2>{experience.companyName}</h2>
          <h2>{experience.logo}</h2>
          <h2>{experience.url}</h2>
          <div>
          {experience.roles.map((role, roleIndex)=>(
            <div key={roleIndex} >
                <h2>{role.title}</h2>
                <h2>{role.description}</h2>
                <h2>{role.startDate}</h2>
                <h2>{role.endDate}</h2>
                <h2>{role.location}</h2>
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Example3;
