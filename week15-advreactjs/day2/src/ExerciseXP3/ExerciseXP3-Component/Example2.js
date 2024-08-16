import React from "react";
import data from "./data.json";

export const Example2 = () => {
  const skills = data.skill;
  return (
    <div>
      <h1>Skills</h1>
      {skills.map((skill, index) => (
        <div key={index}>
          <h2>{skill.area}</h2>
          <div>
            {skill.skillSets.map((skillSet, skillSetIndex) => (
              <div key={skillSetIndex}>
                <h3>{skillSet.name}</h3>
                <p>{skillSet.hot}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Example2;
