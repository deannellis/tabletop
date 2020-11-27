import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import "../imports/api/users";
import "../imports/startup/simpl-schema-config";
import "/imports/db/characters/collection";
import "/imports/api/characters/methods";
import "/imports/api/characters/server/publications";

Meteor.startup(() => {});
