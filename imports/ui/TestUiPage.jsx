import React from "react";
import PageLayout from "./components/PageLayout";
import CardSelect from "./components/CardSelect";

const TestUiPage = () => {
  const cards = ["one", "two", "three", "four"];
  return (
    <PageLayout>
      <h1>Test UI Page</h1>
      <CardSelect>
        {cards.map((card) => (
          <p>{card}</p>
        ))}
      </CardSelect>
    </PageLayout>
  );
};

export default TestUiPage;
