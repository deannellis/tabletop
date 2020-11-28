import React, { useState } from "react";
import { languages } from "../../../../utils/Game";

const PerkSelect = ({ knownLanguages, bgPerk, setBGPerk }) => {
  const [toolOrLang, setToolOrLang] = useState("tool");

  const availableLanguages = languages
    .map(({ language }) => {
      if (language !== "Common" && !knownLanguages.includes(language))
        return language;
    })
    .filter((language) => language != undefined);

  return (
    <div>
      <h3>Add a Language or Tool Proficiency</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div
          className="perk-select__radio-buttons"
          onChange={(e) => {
            const { value } = e.target;
            if (value === "tool") {
              setBGPerk("");
            }
            setToolOrLang(value);
          }}
        >
          <label>
            <input
              type="radio"
              name="toolOrLang"
              value="tool"
              checked={toolOrLang == "tool"}
            />
            Tool
          </label>

          <label>
            <input
              type="radio"
              name="toolOrLang"
              value="lang"
              checked={toolOrLang == "lang"}
            />
            Language
          </label>
        </div>
      </form>
      {toolOrLang === "tool" && (
        <div className="input-group">
          <input
            type="text"
            value={bgPerk}
            className="text-input"
            onChange={(e) => {
              setBGPerk(e.target.value);
            }}
          />
          <label className="label">Enter Tool:</label>
        </div>
      )}
      {toolOrLang === "lang" && (
        <div className="input-group">
          <select
            className="select-input"
            value={bgPerk}
            onChange={(e) => {
              setBGPerk(e.target.value);
            }}
          >
            <option value={undefined}>-</option>
            {availableLanguages.map((language) => (
              <option value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
          <label className="label">Select Language</label>
        </div>
      )}
    </div>
  );
};

export default PerkSelect;
