import React, { useState } from "react";

import { skills } from "../../../../utils/Game";

const SkillSelect = ({ bgProficiency, setBGProficiency, currentSkills }) => {
  const skillNames = skills
    .map((skill) => {
      if (!currentSkills.includes(skill.name)) return skill.name;
    })
    .filter((skill) => skill != undefined);
  return (
    <div className="input-group">
      <select
        className="select-input"
        value={bgProficiency}
        onChange={(e) => {
          setBGProficiency(e.target.value);
        }}
      >
        {skillNames.map((skill) => (
          <option value={skill}>{skill}</option>
        ))}
      </select>
      <label className="label">Skill Proficiency</label>
    </div>
  );
};

export default SkillSelect;
