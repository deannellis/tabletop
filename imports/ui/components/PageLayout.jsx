import React from "react";
import { Accounts } from "meteor/accounts-base";

const PageLayout = ({ children }) => {
  return (
    <>
      <header className="page-layout__app-header">
        <h1>TableTop</h1>
        <div>
          <button
            className="button--text-only"
            onClick={() => Accounts.logout()}
          >
            Logout
          </button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="page-layout__app-footer">
        <p>
          ©<a href="http://deannellis.me/">Dean Nellis</a>{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default PageLayout;
