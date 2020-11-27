import React, { useState } from "react";

import {
  alignmentShorthands,
  printAlignment,
  languages,
} from "../../../../utils/Game";
import PerkSelect from "./PerkSelect";
import SkillSelect from "./SkillSelect";

const CharacterDescription = ({ onSubmitDescription, knownLanguages }) => {
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
      bgPerk1.length === 0 ||
      bgPerk2.length === 0
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

    console.log("success");
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
      <h1>Describe Your Character</h1>

      <label>
        Choose your alignment
        <select
          value={alignment}
          onChange={(e) => {
            setAlignment(e.target.value);
          }}
        >
          {alignmentShorthands.map((alignment) => (
            <option value={alignment}>{printAlignment(alignment)}</option>
          ))}
          <option value=""></option>
        </select>
      </label>
      <h1>Describe your background</h1>
      <label>
        Background Title
        {errorIndexes.includes(0) && (
          <div className="input__error">Background Title is Required!!</div>
        )}
        <input
          type="text"
          value={bgTitle}
          onChange={(e) => {
            setBGTitle(e.target.value);
          }}
        />
      </label>
      <br></br>
      <label>
        Personality Trait
        {errorIndexes.includes(1) && (
          <div className="input__error">Personality Trait is Required!!</div>
        )}
        <textarea
          value={personalityTrait}
          onChange={(e) => {
            setPersonalityTrait(e.target.value);
          }}
        ></textarea>
      </label>
      <br></br>
      <label>
        Ideal
        {errorIndexes.includes(2) && (
          <div className="input__error">Ideal is Required!!</div>
        )}
        <textarea
          value={ideal}
          onChange={(e) => {
            setIdeal(e.target.value);
          }}
        ></textarea>
      </label>
      <br></br>
      <label>
        Bond
        {errorIndexes.includes(3) && (
          <div className="input__error">Bond is Required!!</div>
        )}
        <textarea
          value={bond}
          onChange={(e) => {
            setBond(e.target.value);
          }}
        ></textarea>
      </label>
      <br></br>
      <label>
        Flaw
        {errorIndexes.includes(4) && (
          <div className="input__error">Flaw is Required!!</div>
        )}
        <textarea
          value={flaw}
          onChange={(e) => {
            setFlaw(e.target.value);
          }}
        ></textarea>
      </label>
      <br></br>
      <label>
        Choose 2 Skill Proficiencies
        {bgProficiency1 === bgProficiency2 && <p>Choose 2 separate skills</p>}
        <SkillSelect
          bgProficiency={bgProficiency1}
          setBGProficiency={setBGProficiency1}
        />
        <SkillSelect
          bgProficiency={bgProficiency2}
          setBGProficiency={setBGProficiency2}
        />
      </label>
      <br></br>
      <h3>Choose 2 additional Languages/Tool Proficiencies</h3>
      {errorIndexes.includes(5) && (
        <div className="input__error">Choose your proficiencies</div>
      )}
      {bgPerk1 === bgPerk2 && <p>Choose 2 separate languages</p>}
      <PerkSelect
        knownLanguages={knownLanguages}
        bgPerk={bgPerk1}
        setBGPerk={setBGPerk1}
      />
      <br></br>
      <PerkSelect
        knownLanguages={knownLanguages}
        bgPerk={bgPerk2}
        setBGPerk={setBGPerk2}
      />
      <br></br>
      <button className="button" onClick={handleSubmit}>
        Submit Description
      </button>
    </div>
  );
};

export default CharacterDescription;
