import React, { useState } from "react";

const Finalize = ({ onFinalize }) => {
  const [charName, setCharName] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      <h1>Finalize Character</h1>
      <label>
        Name your character
        {error !== "" && <span>{error}</span>}
        <input
          type="text"
          value={charName}
          onChange={(e) => {
            setCharName(e.target.value);
          }}
        />
      </label>
      <button
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
