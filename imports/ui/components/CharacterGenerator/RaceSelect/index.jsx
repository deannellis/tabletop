import React, { useState } from "react";

import { raceInfo } from "../../../../utils/race";
import CardSelect from "../../CardSelect";

const RaceSelect = ({ onSelectRace }) => (
  <div>
    <h1 className="header--underlined">Select Your Race</h1>
    <CardSelect>
      {raceInfo.map(({ name, description }) => (
        <div key={name} className="race-select__race">
          <h2>{name}</h2>

          <button
            className="button"
            onClick={() => {
              onSelectRace(name);
            }}
          >
            Choose Race
          </button>
        </div>
      ))}
    </CardSelect>
  </div>
);

export default RaceSelect;
