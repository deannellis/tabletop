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
  const onSelectRace = (
    subRace,
    bonusLang,
    skillProficiencies,
    toolProficiency
  ) => {
    const { armor, weapons, tools, skills } = proficiencies;
    const proficiencyUpdates = { ...proficiencies };
    switch (race) {
      case "Dwarf":
        setKnownLanguages([...knownLanguages, "Dwarvish"]);
        setSubRace(subRace);
        if (subRace === "Mountain Dwarf") {
          proficiencyUpdates.armor = [...armor, "light armor", "medium armor"];
        }
        proficiencyUpdates.tools = [...tools, toolProficiency];
        setProficiencies(proficiencyUpdates);
        break;
      case "Elf":
        setKnownLanguages([...knownLanguages, "Elvish"]);
        proficiencyUpdates.weapons = [
          ...weapons,
          "longsword",
          "shortsword",
          "longbow",
          "shortbow",
        ];
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
        if (subRace === "Rock Gnome") {
          proficiencyUpdates.tools = [...tools, "tinker's tools"];
        }
        setKnownLanguages([...knownLanguages, "Gnomish"]);
        setProficiencies(proficiencyUpdates);
        break;
      case "Half-Elf":
        proficiencyUpdates.skills = [...skills, ...skillProficiencies];
        setProficiencies(proficiencyUpdates);
        setKnownLanguages([...knownLanguages, "Elvish", bonusLang]);
        break;
      case "Half-Orc":
        setKnownLanguages([...knownLanguages, "Orc"]);
        proficiencyUpdates.skills = [...skills, "Intimidation"];
        break;
      case "Teifling":
        setKnownLanguages([...knownLanguages, "Infernal"]);
        break;
    }
    setRaceModalIsOpen(false);
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
        if (subRace === "High Elf") {
          withRaceBonus.Intelligence += 1;
        } else if (subRace === "Wood Elf") {
          withRaceBonus.Wisdom += 1;
        }
        break;
      case "Halfling":
        withRaceBonus.Dexterity += 2;
        if (subRace === "Lightfoot") {
          withRaceBonus.Charisma += 1;
        } else if (subRace === "Stout") {
          withRaceBonus.Constitution += 1;
        }
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
        if (subRace === "Forest Gnome") {
          withRaceBonus.Dexterity += 1;
        } else if (subRace === "Rock Gnome") {
          withRaceBonus.Constitution += 1;
        }
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
      setAbilitiesModalIsOpen(true);
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
                  <ConfigureRace race={race} onSubmit={onSelectRace} />
                </div>
                <div className="modal__actions">
                  <button
                    className="button--outline"
                    type="button"
                    onClick={() => {
                      setRaceModalIsOpen(false);
                    }}
                  >
                    Back
                  </button>
                  <button className="button" form="race-config" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </Modal>
            <RaceSelect
              onSelectRace={(submittedRace) => {
                setRace(submittedRace);
                if (
                  submittedRace === "Half-Orc" ||
                  submittedRace === "Tiefling"
                ) {
                  onSelectRace();
                } else {
                  setRaceModalIsOpen(true);
                }
              }}
            />
          </>
        );

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
