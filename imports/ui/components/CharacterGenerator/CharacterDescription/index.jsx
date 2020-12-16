import React, { useState } from "react";

import {
  alignmentShorthands,
  printAlignment,
  languages,
} from "../../../../utils/Game";
import PerkSelect from "./PerkSelect";
import SkillSelect from "./SkillSelect";

const CharacterDescription = ({
  onSubmitDescription,
  knownLanguages,
  currentSkills,
}) => {
  const [alignment, setAlignment] = useState("N");
  const [bgTitle, setBGTitle] = useState("");
  const [personalityTrait, setPersonalityTrait] = useState("");
  const [ideal, setIdeal] = useState("");
  const [flaw, setFlaw] = useState("");
  const [bond, setBond] = useState("");
  const [bgProficiency1, setBGProficiency1] = useState("Acrobatics");
  const [bgProficiency2, setBGProficiency2] = useState("Animal Handling");
  const [bgPerk1, setBGPerk1] = useState(undefined);
  const [bgPerk2, setBGPerk2] = useState(undefined);
  const [errorIndexes, setErrorIndexes] = useState([]);
  handleSubmit = () => {
    let errors = [];
    let addedLanguages = [];
    const languageNames = languages.map(({ language }) => language);

    if (bgTitle.length === 0) {
      errors = [...errors, 0];
    }
    if (personalityTrait.length === 0) {
      errors = [...errors, 1];
    }
    if (ideal.length === 0) {
      errors = [...errors, 2];
    }
    if (bond.length === 0) {
      errors = [...errors, 3];
    }
    if (flaw.length === 0) {
      errors = [...errors, 4];
    }
    if (
      bgPerk1 === undefined ||
      bgPerk2 === undefined ||
      bgPerk1 === "" ||
      bgPerk2 === ""
    ) {
      errors = [...errors, 5];
    }
    setErrorIndexes(errors);

    if (
      bgProficiency1 === bgProficiency2 ||
      errorIndexes.length !== 0 ||
      bgPerk1 === bgPerk2
    ) {
      console.error("errors submitting character description: ", errorIndexes);
      return;
    }

    let toolProficiencies = [];
    if (languageNames.includes(bgPerk1)) {
      addedLanguages = [...addedLanguages, bgPerk1];
    } else {
      toolProficiencies = [...toolProficiencies, bgPerk1];
    }
    if (languageNames.includes(bgPerk2)) {
      addedLanguages = [...addedLanguages, bgPerk2];
    } else {
      toolProficiencies = [...toolProficiencies, bgPerk2];
    }
    const backgroundObject = {
      title: bgTitle.trim(),
      personalityTrait: personalityTrait.trim(),
      ideal: ideal.trim(),
      flaw: flaw.trim(),
      bond: bond.trim(),
    };
    onSubmitDescription(
      alignment,
      backgroundObject,
      [bgProficiency1, bgProficiency2],
      toolProficiencies.map((item) => item.trim()),
      addedLanguages
    );
  };
  return (
    <div>
      <h1 className="header--underlined">Describe Your Character</h1>
      <div className="character-generator__form-wrapper">
        <div className="character-generator__form">
          <h2>Choose your alignment</h2>
          <div className="input-group">
            <select
              value={alignment}
              className="select-input"
              onChange={(e) => {
                setAlignment(e.target.value);
              }}
            >
              {alignmentShorthands.map((alignment) => (
                <option value={alignment}>{printAlignment(alignment)}</option>
              ))}
              <option value=""></option>
            </select>
            <label className="label">Alignment</label>
          </div>
          <h2>Describe your background</h2>
          <div className="input-group">
            <div className="input__error">
              {errorIndexes.includes(0) ? "Background Title is Required" : ""}
            </div>
            <input
              type="text"
              className={`text-input ${
                errorIndexes.includes(0) ? "input--error" : ""
              }`}
              value={bgTitle}
              onChange={(e) => {
                setBGTitle(e.target.value);
              }}
            />
            <label className="label">Background Title</label>
          </div>
          <div className="input-group">
            <div className="input__error">
              {errorIndexes.includes(1) ? "Personality Trait is Required" : ""}
            </div>
            <textarea
              className={`text-area ${
                errorIndexes.includes(0) ? "input--error" : ""
              }`}
              value={personalityTrait}
              onChange={(e) => {
                setPersonalityTrait(e.target.value);
              }}
            ></textarea>
            <label className="label">Personality Trait</label>
          </div>
          <div className="input-group">
            <div className="input__error">
              {errorIndexes.includes(2) ? "Ideal is Required" : ""}
            </div>
            <textarea
              value={ideal}
              className={`text-area ${
                errorIndexes.includes(0) ? "input--error" : ""
              }`}
              onChange={(e) => {
                setIdeal(e.target.value);
              }}
            ></textarea>
            <label className="label">Ideal</label>
          </div>

          <div className="input-group">
            <div className="input__error">
              {errorIndexes.includes(3) ? "Bond is Required" : ""}
            </div>
            <textarea
              value={bond}
              className={`text-area ${
                errorIndexes.includes(0) ? "input--error" : ""
              }`}
              onChange={(e) => {
                setBond(e.target.value);
              }}
            ></textarea>
            <label className="label">Bond</label>
          </div>
          <div className="input-group">
            <div className="input__error">
              {errorIndexes.includes(4) ? "Ideal is Required" : ""}
            </div>
            <textarea
              value={flaw}
              className={`text-area ${
                errorIndexes.includes(0) ? "input--error" : ""
              }`}
              onChange={(e) => {
                setFlaw(e.target.value);
              }}
            ></textarea>
            <label className="label">Flaw</label>
          </div>
          <h2>Choose 2 Skill Proficiencies</h2>

          <SkillSelect
            bgProficiency={bgProficiency1}
            setBGProficiency={setBGProficiency1}
            currentSkills={currentSkills}
          />
          <div className="space-l"></div>
          <SkillSelect
            bgProficiency={bgProficiency2}
            setBGProficiency={setBGProficiency2}
            currentSkills={currentSkills}
          />
          <div className="input__error">
            {bgProficiency1 === bgProficiency2
              ? "Choose 2 separate skills"
              : ""}
          </div>
          <h2>Choose 2 additional Perks</h2>
          <PerkSelect
            knownLanguages={knownLanguages}
            bgPerk={bgPerk1}
            setBGPerk={setBGPerk1}
          />
          <PerkSelect
            knownLanguages={knownLanguages}
            bgPerk={bgPerk2}
            setBGPerk={setBGPerk2}
          />
          <div className="input__error">
            {bgPerk1 === bgPerk2 && bgPerk1 !== undefined && bgPerk2 !== ""
              ? "Choose 2 separate skills. "
              : ""}
            {errorIndexes.includes(5) ? " Perks are Required" : ""}
          </div>
          <button className="button" onClick={handleSubmit}>
            Submit Description
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDescription;
