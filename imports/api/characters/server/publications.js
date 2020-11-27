import { Meteor } from "meteor/meteor";
import CharactersCollection from "/imports/db/characters/collection";

Meteor.publish("characters", function publishCharacters() {
  return CharactersCollection.find({ userId: this.userId });
});
