import React from "react";
import data from "./data.json";

const Example2 = () => {
  const skills = data.Skills || [];
  return (
    <div>
      <h1>Skills</h1>
      {skills.length > 0 &&
        skills.map((skill, index) => (
          <div key={index}>
            <h2>{skill.Area}</h2>
            <div>
              {skill.SkillSets.map((skillSet, skillSetIndex) => (
                <div key={skillSetIndex}>
                  <h3>{skillSet.name}</h3>
                  <p>{skillSet.hot ? "Hot" : "Regular"}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      {skills.length === 0 && <p>No skills data available</p>}
    </div>
  );
};

export default Example2;
