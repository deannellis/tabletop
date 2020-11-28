import React, { useState } from "react";
import Tabs from "../../Tabs";
import TestForm from "../../../forms/TestForm";
import StandardArray from "./StandardArray";

const ScoreAbilities = ({ onScoreAbilities }) => {
  const labels = ["Standard Array", "Roll Scores", "Input Scores"];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1 className="header--underlined">Score Abilities</h1>
      <Tabs
        activeIndex={activeIndex}
        labels={labels}
        handleSelect={setActiveIndex}
      >
        {activeIndex === 0 && (
          <StandardArray onScoreAbilities={onScoreAbilities} />
        )}
        {activeIndex === 1 && (
          <TestForm
            onSubmit={(values) => {
              console.log(values);
            }}
          />
        )}
        {activeIndex === 2 && <h1>3</h1>}
      </Tabs>
    </div>
  );
};

export default ScoreAbilities;
