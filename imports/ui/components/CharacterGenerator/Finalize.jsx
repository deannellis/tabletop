import React, { useState } from "react";

const Finalize = ({ onFinalize }) => {
  const [charName, setCharName] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      <h1 className="header--underlined">Finalize Character</h1>
      <h2>Name your character</h2>
      <div className="input-group">
        <div className="input__error">{!!error ? error : " "}</div>
        <input
          type="text"
          className={`text-input ${!!error && "input--error"}`}
          value={charName}
          onChange={(e) => {
            setCharName(e.target.value);
          }}
        />

        <label>Name </label>
      </div>
      <button
        className="button"
        onClick={() => {
          if (charName.length === 0) {
            setError("Name is required");
            return;
          }
          onFinalize(charName);
        }}
      >
        Finish Character
      </button>
    </div>
  );
};

export default Finalize;
