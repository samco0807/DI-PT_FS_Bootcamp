import React from "react";
import data from "./data.json";

const Example2 = () => {
  const skills = data.Skills;

  return (
    <div>
      <h1>Skills</h1>

      {skills.map((skill, index) => (
        <div key={index}>
          <h2>{skill.Area}</h2>*
          {skill.Area === "Web-Based Application Development" ? (
            <ul>
              {skill.SkillSet.map((skillset, skillsetIndex) => (
                <li key={skillsetIndex}>{skillset.Name}</li>
              ))}
            </ul>
          ) : (
            <ul>
              {skill.SkillSet.map((skillset, skillsetIndex) => (
                <li key={skillsetIndex}>{skillset.Name}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Example2;
