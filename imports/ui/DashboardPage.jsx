import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withRouter, Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import PageLayout from "./components/PageLayout";
import CharactersCollection from "/imports/db/characters/collection";

class DashboardPage extends Component {
  componentDidMount() {
    if (!Meteor.userId()) {
      this.props.history.replace("/");
    }
  }
  render() {
    const { charactersLoading, characters } = this.props;
    return (
      <PageLayout>
        <div className="page-layout__wrapper--padded">
          <Link to="/create-character">
            <button className="button">Create New Character</button>
          </Link>
          {charactersLoading ? <p>Loading...</p> : ""}
          {characters.map((character) => {
            console.log("hope id works", character);
            return <p>{character.charName}</p>;
          })}
        </div>
      </PageLayout>
    );
  }
}

export default withTracker(() => {
  const noDataAvailable = { characters: [] };

  if (!Meteor.user()) {
    return noDataAvailable;
  }

  const handler = Meteor.subscribe("characters");
  if (!handler.ready()) {
    return { ...noDataAvailable, charactersLoading: true };
  }

  const characters = CharactersCollection.find({});

  return { characters, charactersLoading: false };
})(withRouter(DashboardPage));
