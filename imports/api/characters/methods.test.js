import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";
import { mockMethodCall } from "meteor/quave:testing";
import { assert } from "chai";

import CharactersCollection from "/imports/db/characters/collection";
import { newCharacter } from "/imports/utils/fixtures";
import "/imports/api/characters/methods";

if (Meteor.isServer) {
  describe("Characters", () => {
    describe("methods", () => {
      const userId = Random.id();
      let characterId;
      const firstCharacter = {
        abilities: {
          Strength: 15,
          Dexterity: 14,
          Constitution: 13,
          Intelligence: 12,
          Wisdom: 10,
          Charisma: 8,
        },
        alignment: "N",
        background: {
          bond: "test bond",
          flaw: "test flaw",
          ideal: "test ideal",
          personalityTrait: "test personality trait",
          title: "test title",
        },
        charClass: "Fighter",
        charName: "first character",
        knownLanguages: ["Common", "Dwarvish"],
        proficiencies: {
          armor: [],
          skills: ["Stealth", "Survival"],
          tools: ["tool 1"],
          weapons: [],
        },
        race: "Dwarf",
        subRace: "Hill Dwarf",
      };

      beforeEach(() => {
        CharactersCollection.remove({});
        characterId = CharactersCollection.insert(firstCharacter);
      });

      it("can insert new character", () => {
        const newCharacterInstance = { ...newCharacter };
        mockMethodCall("characters.insert", newCharacterInstance, {
          context: { userId },
        });
        const characters = CharactersCollection.find({}).fetch();
        assert.equal(characters.length, 2);
        assert.isTrue(
          characters.some((character) => character.charName === "new character")
        );
      });

      it("can't insert character if not authenticated", () => {
        const newCharacterInstance = { ...newCharacter };
        const fn = () =>
          mockMethodCall("characters.insert", newCharacterInstance);
        assert.throw(fn, /Not authorized/);
        const characters = CharactersCollection.find({}).fetch();
        assert.equal(characters.length, 1);
      });

      it("should return user's characters", () => {
        const characters = CharactersCollection.find({}).fetch();
        assert.equal(characters.length, 1);
        assert.equal(characters[0].charName, "first character");
      });
    });
  });
}
