import React, { useState } from "react";

import { raceInfo, languages } from "../../../utils/Game";
import CardSelect from "../CardSelect";

const RaceSelect = ({ onSelectRace }) => {
  const availableLanguages = languages
    .map(({ language, exotic }) => {
      if (language !== "Common" && !exotic) return language;
    })
    .filter((language) => language != undefined);
  const [bonusLang, setBonusLang] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      <h1>Select Your Race</h1>
      <CardSelect>
        {raceInfo.map(({ name, description }) => (
          <div key={name} className="race-select__race">
            <h2>{name}</h2>
            {/* <p>{description}</p> */}
            {name === "Human" && (
              <label>
                Select your additional language
                <br></br>
                {!!error && <p>{error}</p>}
                <select
                  value={bonusLang}
                  onChange={(e) => {
                    setBonusLang(e.target.value);
                  }}
                >
                  <option value="">-</option>
                  {availableLanguages.map((language) => (
                    <option value={language} key={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <button
              className="button"
              onClick={() => {
                if (name === "Human" && bonusLang === "") {
                  setError("Please choose an additional language");
                  return;
                }
                onSelectRace(name, bonusLang);
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
