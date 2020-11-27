import { Mongo } from "meteor/mongo";

const CharactersCollection = new Mongo.Collection("characters");

export default CharactersCollection;
