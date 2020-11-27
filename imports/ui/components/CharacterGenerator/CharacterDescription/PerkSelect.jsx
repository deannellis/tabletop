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
    <label>
      Language or Tool Proficiency?
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div
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
        <label>
          Enter Tool:
          <input
            type="text"
            value={bgPerk}
            onChange={(e) => {
              setBGPerk(e.target.value);
            }}
          />
        </label>
      )}
      {toolOrLang === "lang" && (
        <label>
          Select Language
          <select
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
        </label>
      )}
    </label>
  );
};

export default PerkSelect;
