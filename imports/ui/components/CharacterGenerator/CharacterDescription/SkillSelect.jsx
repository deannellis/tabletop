import React, { useState } from "react";

import { skills } from "../../../../utils/Game";

const SkillSelect = ({ bgProficiency, setBGProficiency }) => {
  const skillNames = skills.map((skill) => skill.name);
  return (
    <select
      value={bgProficiency}
      onChange={(e) => {
        setBGProficiency(e.target.value);
      }}
    >
      {skillNames.map((skill) => (
        <option value={skill}>{skill}</option>
      ))}
    </select>
  );
};

export default SkillSelect;
