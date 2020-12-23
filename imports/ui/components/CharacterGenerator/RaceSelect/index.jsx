import React, { useState } from "react";

import { languages } from "../../../../utils/Game";
import { raceInfo } from "../../../../utils/race";
import CardSelect from "../../CardSelect";

const RaceSelect = ({ onSelectRace }) => {
  const [bonusLang, setBonusLang] = useState("");
  let [dwarfType, setDwarfType] = useState("Mountain Dwarf");
  const [error, setError] = useState("");
  return (
    <div>
      <h1 className="header--underlined">Select Your Race</h1>
      <CardSelect>
        {raceInfo.map(({ name, description }) => (
          <div key={name} className="race-select__race">
            <h2>{name}</h2>

            <button
              className="button"
              onClick={() => {
                if (name === "Human" && bonusLang === "") {
                  setError("Please choose an additional language");
                  return;
                }
                onSelectRace(name, bonusLang, dwarfType);
              }}
            >
              Choose Race
            </button>
          </div>
        ))}
      </CardSelect>
    </div>
  );
};

export default RaceSelect;
