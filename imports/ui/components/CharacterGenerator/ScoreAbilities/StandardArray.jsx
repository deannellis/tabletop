import React, { useState } from "react";

const StandardArray = ({ onScoreAbilities }) => {
  const scores = [15, 14, 13, 12, 10, 8];
  const abilities = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  const [str, setStr] = useState(scores[0]);
  const [dex, setDex] = useState(scores[1]);
  const [con, setCon] = useState(scores[2]);
  const [int, setInt] = useState(scores[3]);
  const [wis, setWis] = useState(scores[4]);
  const [char, setChar] = useState(scores[5]);
  const [error, setError] = useState("");

  const getAbilityState = (abil) => {
    switch (abil) {
      case abilities[0]:
        return { value: str, update: setStr };
      case abilities[1]:
        return { value: dex, update: setDex };
      case abilities[2]:
        return { value: con, update: setCon };
      case abilities[3]:
        return { value: int, update: setInt };
      case abilities[4]:
        return { value: wis, update: setWis };
      case abilities[5]:
        return { value: char, update: setChar };
    }
  };
  const hasDuplicates = (array) => {
    return new Set(array).size !== array.length;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let finalScores = {};
    abilities.forEach((abil) => {
      finalScores[abil] = getAbilityState(abil).value;
    });
    if (hasDuplicates(Object.values(finalScores))) {
      setError("No duplicate scores!");
    } else {
      onScoreAbilities(finalScores);
    }
  };
  return (
    <div>
      <h1>Standard Array</h1>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        {abilities.map((ability) => (
          <div key={ability}>
            <label>
              {ability}
              <select
                value={getAbilityState(ability).value}
                onChange={(e) => {
                  getAbilityState(ability).update(parseInt(e.target.value));
                }}
              >
                {scores.map((score) => (
                  <option value={score} key={score}>
                    {score}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
        <button className="button" type="submit">
          Submit Scores
        </button>
      </form>
    </div>
  );
};

export default StandardArray;
