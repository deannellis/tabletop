import { getScoreModifier, getProfBonus } from "./Game";

export const classInfo = [
  {
    name: "Barbarian",
    description:
      "A fierce warrior of primitive background who can enter a battle rage",
    hitDie: "d12",
    primaryAbility: "Strength",
  },
  {
    name: "Bard",
    description:
      "An inspiring magician whose power echoes the music of creation",
    hitDie: "d8",
    primaryAbility: "Charisma",
  },
  {
    name: "Cleric",
    description:
      "A priestly champion who wields divine magic in service of a higher power",
    hitDie: "d8",
    primaryAbility: "Wisdom",
  },
  {
    name: "Druid",
    description:
      "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms",
    hitDie: "d8",
    primaryAbility: "Wisdom",
  },
  {
    name: "Fighter",
    description:
      "A master of martial combat, skilled with a variety of weapons and armor",
    hitDie: "d10",
    primaryAbility: "Strength or Dexterity",
  },
  {
    name: "Monk",
    description:
      "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
    hitDie: "d8",
    primaryAbility: "Widsom & Dexterity",
  },
  {
    name: "Paladin",
    description: "A holy warrior bound to a sacred oath",
    hitDie: "d10",
    primaryAbility: "Strength & Charisma",
  },
  {
    name: "Ranger",
    description:
      "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
    hitDie: "d10",
    primaryAbility: "Dexterity & Wisdom",
  },
  {
    name: "Rogue",
    description:
      "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
    hitDie: "d8",
    primaryAbility: "Dexterity",
  },
  {
    name: "Sorcerer",
    description:
      "A spellcaster who draws on inherent magic from a gift or bloodline",
    hitDie: "d6",
    primaryAbility: "Charisma",
  },
  {
    name: "Warlock",
    description:
      "A wielder of magic that is derived from a bargain with an extraplanar entity",
    hitDie: "d8",
    primaryAbility: "Charisma",
  },
  {
    name: "Wizard",
    description:
      "A scholarly magic-user capable of manipulating the structures of reality",
    hitDie: "d6",
    primaryAbility: "Intelligence",
  },
];

export const getInitialHP = (charClass, con, subRace) => {
  const subRaceBonus = subRace === "Hill Dwarf" ? 1 : 0;
  const conMod = getScoreModifier(con);
  if (charClass === "Barbarian") return 12 + conMod + subRaceBonus;
  if (
    charClass === "Fighter" ||
    charClass === "Paladin" ||
    charClass === "Ranger"
  ) {
    return 10 + conMod + subRaceBonus;
  }
  if (
    charClass === "Bard" ||
    charClass === "Cleric" ||
    charClass === "Druid" ||
    charClass === "Monk" ||
    charClass === "Rogue" ||
    charClass === "Warlock"
  ) {
    return 8 + conMod + subRaceBonus;
  }
  if (charClass === "Sorcerer" || charClass === "Wizard") {
    return 6 + conMod + subRaceBonus;
  }
};

export const getClassProficiencies = (charClass) => {
  switch (charClass) {
    case "Barbarian":
      return {
        savingThrows: ["Strength", "Constitution"],
      };
    case "Bard":
      return {
        savingThrows: ["Dexterity", "Charisma"],
      };
    case "Cleric":
      return {
        savingThrows: ["Wisdom", "Charisma"],
      };
    case "Druid":
      return {
        savingThrows: ["Intelligence", "Wisdom"],
      };
    case "Fighter":
      return {
        savingThrows: ["Strength", "Constitution"],
      };
    case "Monk":
      return {
        savingThrows: ["Strength", "Dexterity"],
      };
    case "Paladin":
      return {
        savingThrows: ["Wisdom", "Charisma"],
      };
    case "Ranger":
      return {
        savingThrows: ["Strength", "Dexterity"],
      };
    case "Rogue":
      return {
        savingThrows: ["Dexterity", "Intelligence"],
      };
    case "Sorcerer":
      return {
        savingThrows: ["Constitution", "Charisma"],
      };
    case "Warlock":
      return {
        savingThrows: ["Wisdom", "Charisma"],
      };
    case "Wizard":
      return {
        savingThrows: ["Intelligence", "Wisdom"],
      };
  }
};

export const getSavingThrow = (charClass, ability, abilityScore, level) => {
  const { savingThrows } = getClassProficiencies(charClass);
  if (savingThrows.includes(ability)) {
    return getScoreModifier(abilityScore) + getProfBonus(level);
  } else {
    return getScoreModifier(abilityScore);
  }
};

export const getHitDice = (charClass) => {
  switch (charClass) {
    case "Barbarian":
      return "1d12";
    case "Bard":
      return "1d8";
    case "Cleric":
      return "1d8";
    case "Druid":
      return "1d8";
    case "Fighter":
      return "1d10";
    case "Monk":
      return "1d8";
    case "Paladin":
      return "1d10";
    case "Ranger":
      return "1d10";
    case "Rogue":
      return "1d8";
    case "Sorcerer":
      return "1d6";
    case "Warlock":
      return "1d8";
    case "Wizard":
      return "1d6";
    default:
      "invalid class";
  }
};
