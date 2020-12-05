import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { motion } from "framer-motion";

import PageLayout from "./components/PageLayout";
import CharactersCollection from "/imports/db/characters/collection";
import {
  getProfBonus,
  getAC,
  getScoreModifier,
  getModifierString,
  skills,
  printAlignment,
} from "../utils/Game";
import {
  getClassProficiencies,
  getSavingThrow,
  getHitDice,
} from "../utils/charClass";

class ViewCharacterPage extends Component {
  componentDidMount() {
    if (!Meteor.userId()) {
      this.props.history.replace("/");
    }
  }

  render() {
    const {
      characterLoading,
      character,
      background,
      abilities,
      savingThrows,
      proficiencies,
      knownLanguages,
    } = this.props;
    const {
      charName,
      charClass,
      race,
      level,
      experience,
      hitPoints,
      speed,
      alignment,
    } = character;
    const { title } = background;
    const {
      Strength,
      Dexterity,
      Constitution,
      Intelligence,
      Wisdom,
      Charisma,
    } = abilities;
    console.log("da boi: ", character);
    console.log("pl", savingThrows);
    const animationStates = {
      loading: { opacity: 0 },
      ready: { opacity: 1, transition: { delay: 0.2 } },
    };
    return (
      <PageLayout>
        <div className="page-layout__wrapper--padded">
          <Link to="/dashboard">
            <button type="button" className="button--outline">
              Back to Dashboard
            </button>
          </Link>
          <motion.div
            className="character-sheet"
            variants={animationStates}
            animate={characterLoading ? "loading" : "ready"}
            initial="loading"
          >
            <div className="character-sheet__name character-sheet__cell">
              <h1>{charName}</h1>
            </div>
            <div className="character-sheet__overview-1 character-sheet__cell">
              <h3>{race}</h3>
              <h3>{charClass}</h3>
            </div>
            <div className="character-sheet__overview-2 character-sheet__cell">
              <h3>{title}</h3>
              <h3>{`Exp: ${experience}`}</h3>
            </div>
            <div className="character-sheet__alignment character-sheet__cell">
              <span>Alignment</span>
              <p>{printAlignment(alignment)}</p>
            </div>
            <div className="character-sheet__level character-sheet__cell">
              <span>level</span>
              <h1>{level}</h1>
            </div>
            <div className="character-sheet__proficiency-bonus character-sheet__cell">
              <span>Prof. Bonus</span>
              <h1>{`+ ${getProfBonus(level)}`}</h1>
            </div>
            {Object.keys(abilities).map((ability) => {
              const lowerAbil = ability.toLowerCase();
              return (
                <div
                  className={`character-sheet__${lowerAbil} character-sheet__cell`}
                >
                  <span>{ability}</span>
                  <h1>
                    {getModifierString(getScoreModifier(abilities[ability]))}
                  </h1>
                  <p>{abilities[ability]}</p>
                </div>
              );
            })}

            <div className="character-sheet__armor-class character-sheet__cell">
              <span>Armor Class</span>
              <h1>{getAC(Dexterity)}</h1>
            </div>
            <div className="character-sheet__hit-points character-sheet__cell">
              <span>Hit Points</span>
              <h1>{hitPoints}</h1>
            </div>
            <div className="character-sheet__saving-throws character-sheet__cell">
              <span>Saving Throws</span>
              <div className="character-sheet__cell-split">
                <ul>
                  <li
                    className={
                      savingThrows.Strength.proficient &&
                      "character-sheet__saving-throw--filled"
                    }
                  >
                    {getModifierString(savingThrows.Strength.score)} STR
                  </li>
                  <li
                    className={
                      savingThrows.Dexterity.proficient &&
                      "character-sheet__saving-throw--filled"
                    }
                  >
                    {getModifierString(savingThrows.Dexterity.score)} DEX
                  </li>
                  <li
                    className={
                      savingThrows.Constitution.proficient &&
                      "character-sheet__saving-throw--filled"
                    }
                  >
                    {getModifierString(savingThrows.Constitution.score)} CON
                  </li>
                </ul>
                <ul>
                  <li
                    className={
                      savingThrows.Intelligence.proficient &&
                      "character-sheet__saving-throw--filled"
                    }
                  >
                    {getModifierString(savingThrows.Intelligence.score)} INT
                  </li>
                  <li
                    className={
                      savingThrows.Wisdom.proficient &&
                      "character-sheet__saving-throw--filled"
                    }
                  >
                    {getModifierString(savingThrows.Wisdom.score)} WIS
                  </li>
                  <li
                    className={
                      savingThrows.Charisma.proficient &&
                      "character-sheet__saving-throw--filled"
                    }
                  >
                    {getModifierString(savingThrows.Charisma.score)} CHA
                  </li>
                </ul>
              </div>
            </div>
            <div className="character-sheet__speed character-sheet__cell">
              <span>Speed</span>
              <h1>{speed}</h1>
            </div>
            <div className="character-sheet__initiative character-sheet__cell">
              <span>Initiative</span>
              <h1>{getModifierString(getScoreModifier(Dexterity))}</h1>
            </div>
            <div className="character-sheet__hitDice character-sheet__cell">
              <span>Hit Dice</span>
              <h1>{getHitDice(charClass)}</h1>
            </div>
            <div className="character-sheet__death-saves character-sheet__cell">
              <span>Death Saves</span>
              <div>
                <span>Successes</span>
                <ul>
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
              <div>
                <span>Failures</span>
                <ul>
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
            </div>
            <div className="character-sheet__languages character-sheet__cell">
              <span>Languages</span>
              <ul>
                {knownLanguages.map((language) => (
                  <li>{language}</li>
                ))}
              </ul>
            </div>
            <div className="character-sheet__skills character-sheet__cell">
              <span>Skills</span>
              <ul>
                {skills.map(({ name, ability }) => {
                  if (proficiencies.includes(name)) {
                    return (
                      <li className="character-sheet__skill--filled">
                        {`${getModifierString(
                          getScoreModifier(abilities[ability]) +
                            getProfBonus(level)
                        )}  ${name} `}
                        <span>{ability.substring(0, 3)}</span>
                      </li>
                    );
                  } else {
                    return (
                      <li>
                        {`${getModifierString(
                          getScoreModifier(abilities[ability])
                        )} ${name} `}
                        <span>{ability.substring(0, 3)}</span>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="character-sheet__background ">
              {Object.keys(background).map((item) => {
                if (item === "title") return;
                return (
                  <div className="character-sheet__cell">
                    <span>{item}</span>
                    <p>{background[item]}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </PageLayout>
    );
  }
}

export default withTracker(({ match }) => {
  const noDataAvailable = {
    character: {},
    background: {},
    abilities: {},
    savingThrows: {
      Strength: { score: undefined, proficient: undefined },
      Dexterity: { score: undefined, proficient: undefined },
      Constitution: { score: undefined, proficient: undefined },
      Intelligence: { score: undefined, proficient: undefined },
      Wisdom: { score: undefined, proficient: undefined },
      Charisma: { score: undefined, proficient: undefined },
    },
    proficiencies: [],
    knownLanguages: [],
  };

  if (!Meteor.user()) {
    return noDataAvailable;
  }

  const handler = Meteor.subscribe("characters");
  if (!handler.ready()) {
    return { ...noDataAvailable, characterLoading: true };
  }

  const {
    params: { charId },
  } = match;
  const character = CharactersCollection.find({ _id: charId }).fetch()[0];
  const {
    background,
    abilities,
    charClass,
    level,
    proficiencies,
    knownLanguages,
  } = character;
  const savingThrowProfs = getClassProficiencies(charClass).savingThrows;
  const savingThrows = {
    Strength: {
      score: getSavingThrow(charClass, "Strength", abilities.Strength, level),
      proficient: savingThrowProfs.includes("Strength"),
    },
    Dexterity: {
      score: getSavingThrow(charClass, "Dexterity", abilities.Dexterity, level),
      proficient: savingThrowProfs.includes("Dexterity"),
    },
    Constitution: {
      score: getSavingThrow(
        charClass,
        "Constitution",
        abilities.Constitution,
        level
      ),
      proficient: savingThrowProfs.includes("Constitution"),
    },
    Intelligence: {
      score: getSavingThrow(
        charClass,
        "Intelligence",
        abilities.Intelligence,
        level
      ),
      proficient: savingThrowProfs.includes("Intelligence"),
    },

    Wisdom: {
      score: getSavingThrow(charClass, "Wisdom", abilities.Wisdom, level),
      proficient: savingThrowProfs.includes("Wisdom"),
    },
    Charisma: {
      score: getSavingThrow(charClass, "Charisma", abilities.Charisma, level),
      proficient: savingThrowProfs.includes("Charisma"),
    },
  };

  return {
    character,
    background,
    abilities,
    savingThrows,
    characterLoading: false,
    proficiencies,
    knownLanguages,
  };
})(withRouter(ViewCharacterPage));
