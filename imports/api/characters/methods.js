import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import moment from "moment";
import SimpleSchema from "simpl-schema";

import {
  alignmentShorthands,
  classInfo,
  languages,
  skills,
  raceInfo,
} from "../../utils/Game";
import CharactersCollection from "../../db/characters/collection";

const charClasses = classInfo
  .map(({ name }) => name)
  .filter((item) => item !== undefined);
const languageNames = languages
  .map(({ language }) => language)
  .filter((item) => item !== undefined);
const skillNames = skills
  .map(({ name }) => name)
  .filter((item) => item !== undefined);
const races = raceInfo
  .map(({ name }) => name)
  .filter((item) => item !== undefined);

Meteor.methods({
  "characters.insert"(character) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized");
    }
    const abilitiesSchema = new SimpleSchema({
      Strength: { type: Number, min: 3, max: 18 },
      Dexterity: { type: Number, min: 3, max: 18 },
      Constitution: { type: Number, min: 3, max: 18 },
      Intelligence: { type: Number, min: 3, max: 18 },
      Wisdom: { type: Number, min: 3, max: 18 },
      Charisma: { type: Number, min: 3, max: 18 },
    });
    const backgroundSchema = new SimpleSchema({
      bond: { type: String, min: 1, max: 256 },
      flaw: { type: String, min: 1, max: 256 },
      ideal: { type: String, min: 1, max: 256 },
      personalityTrait: { type: String, min: 1, max: 256 },
      title: { type: String, min: 1, max: 64 },
    });
    new SimpleSchema({
      abilities: abilitiesSchema,
      alignment: { type: String, allowedValues: alignmentShorthands },
      background: backgroundSchema,
      charClass: { type: String, allowedValues: charClasses },
      charName: { type: String, min: 1, max: 48 },
      knownLanguages: { type: Array },
      "knownLanguages.$": {
        type: String,
        allowedValues: languageNames,
      },
      proficiencies: { type: Array },
      "proficiencies.$": { type: String, allowedValues: skillNames },
      race: { type: String, allowedValues: races },
      toolProficiencies: { type: Array },
      "toolProficiencies.$": { type: String },
    }).validate(character);

    CharactersCollection.insert({
      ...character,
      updatedAt: moment().valueOf(),
      userId: this.userId,
    });
  },
});
