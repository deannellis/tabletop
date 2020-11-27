import React, { useState } from "react";

import RaceSelect from "./RaceSelect";
import ClassSelect from "./ClassSelect";
import ScoreAbilities from "./ScoreAbilities";
import CharacterDescription from "./CharacterDescription";
import Finalize from "./Finalize";
import ProgressStepper from "../ProgressStepper";
import "/imports/api/characters/methods";

const CharacterGenerator = ({ history }) => {
  const [step, setStep] = useState(0);
  const [race, setRace] = useState(undefined);
  const [abilities, setAbilities] = useState(undefined);
  const [charClass, setCharClass] = useState(undefined);
  const [knownLanguages, setKnownLanguages] = useState(["Common"]);
  const [alignment, setAlignment] = useState(undefined);
  const [background, setBackground] = useState({});
  const [proficiencies, setProficiencies] = useState([]);
  const [toolProficiencies, setToolProficiencies] = useState([]);

  const incrementStep = () => {
    setStep(step + 1);
  };
  const onSelectRace = (race, bonusLang) => {
    switch (race) {
      case "Dwarf":
        setKnownLanguages([...knownLanguages, "Dwarvish"]);
        break;
      case "Elf":
        setKnownLanguages([...knownLanguages, "Elvish"]);
        break;
      case "Halfling":
        setKnownLanguages([...knownLanguages, "Halfling"]);
        break;
      case "Human":
        setKnownLanguages([...knownLanguages, bonusLang]);
        break;
      case "Dragonborn":
        setKnownLanguages([...knownLanguages, "Draconic"]);
        break;
      case "Gnome":
        setKnownLanguages([...knownLanguages, "Gnomish"]);
        break;
      case "Half-Elf":
        setKnownLanguages([...knownLanguages, "Elvish"]);
        break;
      case "Half-Orc":
        setKnownLanguages([...knownLanguages, "Orc"]);
        break;
      case "Teifling":
        setKnownLanguages([...knownLanguages, "Infernal"]);
        break;
    }
    setRace(race);
    incrementStep();
  };
  const onSelectClass = (charClass) => {
    setCharClass(charClass);
    incrementStep();
  };
  const onScoreAbilities = (abilities) => {
    setAbilities(abilities);
    incrementStep();
  };
  const onSubmitDescription = (
    alignment,
    background,
    proficiencies,
    toolProficiencies,
    addedLanguages
  ) => {
    setAlignment(alignment);
    setBackground(background);
    setProficiencies(proficiencies);
    setToolProficiencies(toolProficiencies);
    setKnownLanguages([...knownLanguages, ...addedLanguages]);
    incrementStep();
  };
  const onFinalize = (charName) => {
    const finalCharacter = {
      charName: charName.trim(),
      race,
      charClass,
      abilities,
      alignment,
      background,
      knownLanguages,
      proficiencies,
      toolProficiencies,
    };
    console.log("payload: ", finalCharacter);
    Meteor.call("characters.insert", finalCharacter);
    history.push("/dashboard");
  };
  const stepLabels = ["Race", "Class", "Abilities", "Description", "Finish"];
  const getStepJsx = (i) => {
    switch (i) {
      case 0:
        return <RaceSelect onSelectRace={onSelectRace} />;
      case 1:
        return <ClassSelect onSelectClass={onSelectClass} />;
      case 2:
        return <ScoreAbilities onScoreAbilities={onScoreAbilities} />;
      case 3:
        return (
          <CharacterDescription
            knownLanguages={knownLanguages}
            onSubmitDescription={onSubmitDescription}
          />
        );
      case 4:
        return <Finalize onFinalize={onFinalize} />;
      default:
        return <h1>Character Generator</h1>;
    }
  };

  const handleStepClick = (i) => {
    setStep(i);
  };

  return (
    <div>
      <ProgressStepper
        steps={stepLabels}
        currentStep={step}
        handleStepClick={handleStepClick}
      />
      {getStepJsx(step)}
    </div>
  );
};

export default CharacterGenerator;
