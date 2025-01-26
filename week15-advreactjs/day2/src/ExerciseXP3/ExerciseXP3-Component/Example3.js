import React from "react";
import data from "./data.json";

export const Example3 = () => {
  const experiencesList = data.Experiences;

  return (
    <div>
      <h1>Social Medias</h1>
      <div>
        {experiencesList.map((experience, index) => (
          <div key={index}>
            {/* display the logo */}
            <img src={experience.logo} alt="bla"></img>
            <h2>{experience.companyName}</h2>

            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <h3>{role.index}</h3>
                <p>{role.description} </p>{" "}
              </div>
            ))}
            <h3>{experience.title}</h3>
            <p>{experience.decription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example3;
