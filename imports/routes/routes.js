import React from "react";
import { Meteor } from "meteor/meteor";
import createHistory from "history/createBrowserHistory";
import { Router, Switch, Route } from "react-router-dom";

import DashboardPage from "../ui/DashboardPage";
import CharacterCreationPage from "../ui/CharacterCreationPage";
import LoginPage from "../ui/LoginPage";
import SignUpPage from "../ui/SignUpPage";
import NotFoundPage from "../ui/NotFoundPage";
import TestUiPage from "../ui/TestUiPage";

const history = createHistory();
const unauthenticatedPages = ["/", "/signup"];
const authenticatedPages = ["/dashboard", "/create-character"];

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  console.log("is authenticated", isAuthenticated);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  console.log("is auth page", isAuthenticatedPage);
  console.log("is NOT auth page", isUnauthenticatedPage);

  if (isAuthenticated && isUnauthenticatedPage) {
    console.log("should redirect to dahsboard");
    history.replace("/dashboard");
  } else if (!isAuthenticated && isAuthenticatedPage) {
    console.log("should redirect to login");
    history.replace("/");
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/create-character" component={CharacterCreationPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/testui" component={TestUiPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
);
