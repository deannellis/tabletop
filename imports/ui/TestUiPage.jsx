import React from "react";
import PageLayout from "./components/PageLayout";
import TestForm from "./forms/TestForm";
const TestUiPage = () => {
  const cards = ["one", "two", "three", "four"];
  return (
    <PageLayout>
      <h1>Test UI Page</h1>
      <TestForm />
    </PageLayout>
  );
};

export default TestUiPage;
