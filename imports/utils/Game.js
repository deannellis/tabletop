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
  { name: "Acrobatics", ability: "Dex" },
  { name: "Animal Handling", ability: "Wis" },
  { name: "Arcana", ability: "Int" },
  { name: "Athletics", ability: "Str" },
  { name: "Deception", ability: "Cha" },
  { name: "History", ability: "Int" },
  { name: "Insight", ability: "Wis" },
  { name: "Intimidation", ability: "Cha" },
  { name: "Investigation", ability: "Int" },
  { name: "Medicine", ability: "Wis" },
  { name: "Nature", ability: "Int" },
  { name: "Perception", ability: "Wis" },
  { name: "Performance", ability: "Cha" },
  { name: "Persuasion", ability: "Cha" },
  { name: "Religion", ability: "Int" },
  { name: "Sleight of Hand", ability: "Dex" },
  { name: "Stealth", ability: "Dex" },
  { name: "Survival", ability: "Wis" },
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

export const raceInfo = [
  {
    name: "Dwarf",
    description:
      "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.",
  },
  {
    name: "Elf",
    description:
      "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.",
  },
  {
    name: "Halfling",
    description:
      "The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along an dirt road or a raft floating downriver.",
  },
  {
    name: "Human",
    description:
      "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
  },
  {
    name: "Dragonborn",
    description:
      "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.",
  },
  {
    name: "Gnome",
    description:
      "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.",
  },
  {
    name: "Half-Elf",
    description:
      "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.",
  },
  {
    name: "Tiefling",
    description:
      "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus — overlord of the Nine Hells — into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.",
  },
];

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
