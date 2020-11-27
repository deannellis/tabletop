import React from "react";

import CardSelect from "../CardSelect";
import { classInfo } from "../../../utils/Game";

const ClassSelect = ({ onSelectClass }) => {
  return (
    <div>
      <h1>Select Your Class</h1>
      <CardSelect>
        {classInfo.map(({ name, description, hitDie, primaryAbility }) => (
          <div key={name} className="class-select__class">
            <h2>{name}</h2>
            <p>{description}</p>
            <span>Hit Die</span>
            <p>{hitDie}</p>
            <span>Primary Ability</span>
            <p>{primaryAbility}</p>
            <button
              className="button"
              onClick={() => {
                onSelectClass(name);
              }}
            >
              Choose Class
            </button>
          </div>
        ))}
      </CardSelect>
    </div>
  );
};

export default ClassSelect;
