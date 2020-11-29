import React, { useState } from "react";
import Tabs from "../../Tabs";
import AbilitiesForm from "../../../forms/AbilitiesForm";
import StandardArray from "./StandardArray";

const ScoreAbilities = ({ onScoreAbilities }) => {
  const labels = ["Standard Array", "Input Scores"];
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
        {activeIndex === 1 && <AbilitiesForm onSubmit={onScoreAbilities} />}
      </Tabs>
    </div>
  );
};

export default ScoreAbilities;
