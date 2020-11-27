import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withRouter, Link } from "react-router-dom";

import PageLayout from "./components/PageLayout";
import CharacterGenerator from "./components/CharacterGenerator/";

class DashboardPage extends Component {
  componentDidMount() {
    if (!Meteor.userId()) {
      this.props.history.replace("/");
    }
  }
  render() {
    const { history } = this.props;
    return (
      <PageLayout>
        <div className="page-layout__wrapper--padded">
          <CharacterGenerator history={history} />
        </div>
      </PageLayout>
    );
  }
}

export default withRouter(DashboardPage);
