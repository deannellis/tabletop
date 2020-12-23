import React, { useState } from "react";

import RaceSelect from "./RaceSelect";
import ConfigureRace from "./RaceSelect/ConfigureRace";
import ClassSelect from "./ClassSelect";
import ScoreAbilities from "./ScoreAbilities";
import BonusAbilities from "./ScoreAbilities/BonusAbilities";
import CharacterDescription from "./CharacterDescription";
import Finalize from "./Finalize";
import ProgressStepper from "../ProgressStepper";
import Modal from "../Modal";
import "/imports/api/characters/methods";

const CharacterGenerator = ({ history }) => {
  const [step, setStep] = useState(0);
  const [race, setRace] = useState(undefined);
  const [subRace, setSubRace] = useState("");
  const [abilities, setAbilities] = useState(undefined);
  const [charClass, setCharClass] = useState(undefined);
  const [knownLanguages, setKnownLanguages] = useState(["Common"]);
  const [alignment, setAlignment] = useState(undefined);
  const [background, setBackground] = useState({});
  const [proficiencies, setProficiencies] = useState({
    armor: [],
    weapons: [],
    tools: [],
    skills: [],
  });
  const [abilitiesModalIsOpen, setAbilitiesModalIsOpen] = useState(false);
  const [raceModalIsOpen, setRaceModalIsOpen] = useState(false);

  const incrementStep = () => {
    setStep(step + 1);
  };
  const onSelectRace = (race, bonusLang, dwarfType) => {
    const { armor, weapons, tools, skills } = proficiencies;
    const proficiencyUpdates = { ...proficiencies };
    switch (race) {
      case "Dwarf":
        setKnownLanguages([...knownLanguages, "Dwarvish"]);
        setSubRace(dwarfType);
        proficiencyUpdates.armor = [...armor, "light armor", "medium armor"];
        if (dwarfType === "Mountain Dwarf") {
          setProficiencies(proficiencyUpdates);
        }
        break;
      case "Elf":
        setKnownLanguages([...knownLanguages, "Elvish"]);
        proficiencyUpdates.skills = [...skills, "Perception"];
        setProficiencies(proficiencyUpdates);
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
        proficiencyUpdates.tools = [...tools, "tinker's tools"];
        setKnownLanguages([...knownLanguages, "Gnomish"]);
        break;
      case "Half-Elf":
        setKnownLanguages([...knownLanguages, "Elvish"]);
        break;
      case "Half-Orc":
        setKnownLanguages([...knownLanguages, "Orc"]);
        proficiencyUpdates.skills = [...skills, "Intimidation"];
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
    const withRaceBonus = { ...abilities };
    switch (race) {
      case "Dwarf":
        withRaceBonus.Constitution += 2;
        if (subRace === "Hill Dwarf") {
          withRaceBonus.Wisdom += 1;
        } else if (subRace === "Mountain Dwarf") {
          withRaceBonus.Strength += 2;
        }
        break;
      case "Elf":
        withRaceBonus.Dexterity += 2;
        break;
      case "Halfling":
        withRaceBonus.Dexterity += 2;
        break;
      case "Human":
        const abilityKeys = Object.keys(abilities);
        abilityKeys.forEach((ability) => {
          withRaceBonus[ability] += 1;
        });
        break;
      case "Dragonborn":
        withRaceBonus.Strength += 2;
        withRaceBonus.Charisma += 1;
        break;
      case "Gnome":
        withRaceBonus.Intelligence += 2;
        break;
      case "Half-Elf":
        withRaceBonus.Charisma += 2;
        break;
      case "Half-Orc":
        withRaceBonus.Strength += 2;
        withRaceBonus.Constitution += 1;
        break;
      case "Tiefling":
        withRaceBonus.Charisma += 2;
        withRaceBonus.Intelligence += 1;
        break;
    }
    setAbilities(withRaceBonus);
    if (race === "Half-Elf") {
      setModalIsOpen(true);
    } else {
      incrementStep();
    }
  };
  const onSubmitDescription = (
    alignment,
    background,
    skillProficiencies,
    toolProficiencies,
    addedLanguages
  ) => {
    setAlignment(alignment);
    setBackground(background);
    const proficiencyUpdates = {
      ...proficiencies,
      skills: skillProficiencies,
      tools: toolProficiencies,
    };
    setProficiencies(proficiencyUpdates);
    setKnownLanguages([...knownLanguages, ...addedLanguages]);
    incrementStep();
  };
  const onFinalize = (charName) => {
    const finalCharacter = {
      charName: charName.trim(),
      race,
      subRace,
      charClass,
      abilities,
      alignment,
      background,
      knownLanguages,
      proficiencies,
    };
    console.log("payload: ", finalCharacter);
    // Meteor.call("characters.insert", finalCharacter);
    // history.push("/dashboard");
  };
  const stepLabels = ["Race", "Class", "Abilities", "Description", "Finish"];
  const getStepJsx = (i) => {
    switch (i) {
      case 0:
        return (
          <>
            <Modal
              isOpen={raceModalIsOpen}
              handleClose={() => {
                setRaceModalIsOpen(false);
              }}
              isMaxSize
            >
              <div className="modal">
                <div className="modal__header">
                  <h1>{`Configure your ${race}`}</h1>
                </div>
                <div className="modal__body">
                  <ConfigureRace race={race} />
                </div>
                <div className="modal__actions">
                  <button className="button">Go</button>
                </div>
              </div>
            </Modal>
            <RaceSelect
              onSelectRace={(submittedRace) => {
                setRaceModalIsOpen(true);
                setRace(submittedRace);
              }}
            />
          </>
        );
      // TODO: Add Modal for race configuration
      // Dwarf - Tool Proficiency
      // Elf - subrace
      // Halfling - subrace
      // Dragonborn - draconic ancestry
      // Gnome - subrace
      // Half-Elf - skill versitility, extra language

      case 1:
        return <ClassSelect onSelectClass={onSelectClass} />;
      case 2:
        return (
          <>
            <Modal
              isOpen={abilitiesModalIsOpen}
              handleClose={() => {
                setAbilitiesModalIsOpen(false);
              }}
              contentLabel="Bonus Abilities Modal"
            >
              <BonusAbilities
                onSubmit={(submittedAbilities) => {
                  const abilityKeys = Object.keys(abilities);
                  const updates = { ...abilities };
                  abilityKeys.forEach((ability) => {
                    if (submittedAbilities.includes(ability)) {
                      updates[ability] += 1;
                    }
                  });
                  setAbilities(updates);
                  incrementStep();
                }}
              />
            </Modal>
            <ScoreAbilities onScoreAbilities={onScoreAbilities} race={race} />
          </>
        );
      case 3:
        return (
          <CharacterDescription
            knownLanguages={knownLanguages}
            currentSkills={proficiencies.skills}
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
