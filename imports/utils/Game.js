export const alignmentShorthands = [
  "LG",
  "NG",
  "CG",
  "LN",
  "N",
  "CN",
  "LE",
  "NE",
  "CE",
];

export const printAlignment = (shorthand) => {
  switch (shorthand) {
    case "LG":
      return "Lawful Good";
    case "NG":
      return "Neutral Good";
    case "CG":
      return "Chaotic Good";
    case "LN":
      return "Lawful Neutral";
    case "N":
      return "Neutral";
    case "CN":
      return "Chaotic Neutral";
    case "LE":
      return "Lawful Evil";
    case "NE":
      return "Neutral Evil";
    case "CE":
      return "Chaotic Evil";
    default:
      console.error("printAlignment called with non-valid argument");
  }
};

export const skills = [
  { name: "Acrobatics", ability: "Dexterity" },
  { name: "Animal Handling", ability: "Wisdom" },
  { name: "Arcana", ability: "Intelligence" },
  { name: "Athletics", ability: "Strength" },
  { name: "Deception", ability: "Charisma" },
  { name: "History", ability: "Intelligence" },
  { name: "Insight", ability: "Wisdom" },
  { name: "Intimidation", ability: "Charisma" },
  { name: "Investigation", ability: "Intelligence" },
  { name: "Medicine", ability: "Wisdom" },
  { name: "Nature", ability: "Intelligence" },
  { name: "Perception", ability: "Wisdom" },
  { name: "Performance", ability: "Charisma" },
  { name: "Persuasion", ability: "Charisma" },
  { name: "Religion", ability: "Intelligence" },
  { name: "Sleight of Hand", ability: "Dexterity" },
  { name: "Stealth", ability: "Dexterity" },
  { name: "Survival", ability: "Wisdom" },
];

export const languages = [
  { language: "Common", speakers: "Humans", script: "Common", exotic: false },
  {
    language: "Dwarvish",
    speakers: "Dwarves",
    script: "Dwarvish",
    exotic: false,
  },
  { language: "Elvish", speakers: "Elves", script: "Elvish", exotic: false },
  {
    language: "Giant",
    speakers: "Ogres, Giants",
    script: "Dwarvish",
    exotic: false,
  },
  {
    language: "Gnomish",
    speakers: "Gnomes",
    script: "Dwarvish",
    exotic: false,
  },
  {
    language: "Goblin",
    speakers: "Goblinoids",
    script: "Dwarvish",
    exotic: false,
  },
  {
    language: "Halfling",
    speakers: "Halflings",
    script: "Common",
    exotic: false,
  },
  { language: "Orc", speakers: "Orcs", script: "Dwarvish", exotic: false },
  { language: "Abyssal", speakers: "Demons", script: "Infernal", exotic: true },
  {
    language: "Celestial",
    speakers: "Celestials",
    script: "Celestial",
    exotic: true,
  },
  {
    language: "Draconic",
    speakers: "Dragons, Dragonborn",
    script: "Draconic",
    exotic: true,
  },
  {
    language: "Deep Speech",
    speakers: "Aboleths, Cloakers",
    script: "-",
    exotic: true,
  },
  {
    language: "Infernal",
    speakers: "Devils",
    script: "Infernal",
    exotic: true,
  },
  {
    language: "Primordial",
    speakers: "Elementals",
    script: "Dwarvish",
    exotic: true,
  },
  {
    language: "Sylvan",
    speakers: "Fey creatures",
    script: "Elvish",
    exotic: true,
  },
  {
    language: "Undercommon",
    speakers: "Underworld traders",
    script: "Elvish",
    exotic: true,
  },
];

export const getProfBonus = (level) => {
  if ([1, 2, 3, 4].includes(level)) return 2;
  if ([5, 6, 7, 8].includes(level)) return 3;
  if ([9, 10, 11, 12].includes(level)) return 4;
  if ([13, 14, 15, 16].includes(level)) return 5;
  if ([17, 18, 19, 20].includes(level)) return 6;
};

export const getScoreModifier = (score) => {
  if (score === 1) return -5;
  if (score === 2 || score === 3) return -4;
  if (score === 4 || score === 5) return -3;
  if (score === 6 || score === 7) return -2;
  if (score === 8 || score === 9) return -1;
  if (score === 10 || score === 11) return 0;
  if (score === 12 || score === 13) return 1;
  if (score === 14 || score === 15) return 2;
  if (score === 16 || score === 17) return 3;
  if (score === 18 || score === 19) return 4;
  if (score === 20 || score === 21) return 5;
  if (score === 22 || score === 23) return 6;
  if (score === 24 || score === 25) return 7;
  if (score === 26 || score === 27) return 8;
  if (score === 28 || score === 29) return 9;
  if (score === 30) return 10;
};

export const getModifierString = (score) => `${score >= 0 ? "+" : ""} ${score}`;

export const getAC = (dex, equipment) => {
  return 10 + getScoreModifier(dex);
};
