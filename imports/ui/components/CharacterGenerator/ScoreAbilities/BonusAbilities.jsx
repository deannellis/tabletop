import React, { useState } from "react";
import { abilities } from "../../../../utils/Game";

const BonusAbilities = ({ onSubmit }) => {
  const [bonusAbility1, setBonusAbility1] = useState("Strength");
  const [bonusAbility2, setBonusAbility2] = useState("Strength");
  const [error, setError] = useState("");
  return (
    <div>
      <h2>Half-Elf Bonus</h2>
      <form className="form">
        <div className="input-group">
          {!!error ? (
            <div className="input__error">{error}</div>
          ) : (
            <div className="input__helper-text">Choose Bonus Ability</div>
          )}
          <select
            value={bonusAbility1}
            className={`select-input ${!!error ? "input--error" : ""}`}
            onChange={(e) => {
              setBonusAbility1(e.target.value);
            }}
          >
            {abilities.map((ability) => (
              <option value={ability} key={ability}>
                {ability}
              </option>
            ))}
          </select>
          <label className="label">Ability</label>
        </div>
        <div className="input-group">
          {!!error ? (
            <div className="input__error">{error}</div>
          ) : (
            <div className="input__helper-text">Choose Bonus Ability</div>
          )}
          <select
            value={bonusAbility2}
            className={`select-input ${!!error ? "input--error" : ""}`}
            onChange={(e) => {
              setBonusAbility2(e.target.value);
            }}
          >
            {abilities.map((ability) => (
              <option value={ability} key={ability}>
                {ability}
              </option>
            ))}
          </select>
          <label className="label">Ability</label>
        </div>
        <button
          className="button"
          type="button"
          onClick={() => {
            if (bonusAbility1 === bonusAbility2) {
              setError("Abilities must be unique");
            } else {
              onSubmit([bonusAbility1, bonusAbility2]);
            }
          }}
        >
          Choose Abilities
        </button>
      </form>
    </div>
  );
};

export default BonusAbilities;
