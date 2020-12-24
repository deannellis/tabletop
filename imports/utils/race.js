const darkVision = {
  title: "Dark Vision",
  description:
    "You have superior vision in dark & dim conditions within 60 feet",
};

export const raceInfo = [
  {
    name: "Dwarf",
    description:
      "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.",
    size: "medium",
    traits: [
      { ...darkVision },
      {
        title: "Dwarven Resilience",
        description:
          "You have advantage on saving throws against poison, and you have resistance against poison damage",
      },
      {
        title: "Dwarven Combat Training",
        description:
          "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer",
      },
      {
        title: "Stonecunning",
        description:
          "Whenever you make a History check related to the origin of stonework, you are considered proficient and add double your proficiency bonus to the check",
      },
    ],
  },

  {
    name: "Elf",
    description:
      "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.",
    size: "medium",
    traits: [
      { ...darkVision },
      { title: "Keen Senses", description: "You are proficient in Perception" },
    ],
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
    name: "Half-Orc",
    description:
      "Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.",
  },
  {
    name: "Tiefling",
    description:
      "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus — overlord of the Nine Hells — into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.",
  },
];

export const getSpeed = (race, equipment) => {
  switch (race) {
    case "Dwarf":
      return 25;
    case "Elf":
      return 30;
    case "Halfling":
      return 25;
    case "Human":
      return 30;
    case "Dragonborn":
      return 30;
    case "Gnome":
      return 25;
    case "Half-Elf":
      return 30;
    case "Half-Orc":
      return 30;
    case "Tiefling":
      return 30;
    default:
      return "called with invalid race";
  }
};

export const draconicAncestryTypes = [
  "Black",
  "Blue",
  "Brass",
  "Bronze",
  "Copper",
  "Gold",
  "Green",
  "Red",
  "Silver",
  "White",
];
