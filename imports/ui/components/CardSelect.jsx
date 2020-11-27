import React, { useState } from "react";
import { motion } from "framer-motion";

const CardSelect = ({ children }) => {
  [activeIndex, setActiveIndex] = useState(0);
  const incIndex = () => {
    setActiveIndex(activeIndex + 1);
  };
  const decIndex = () => {
    setActiveIndex(activeIndex - 1);
  };
  const getValue = (i) => {
    switch (i) {
      case activeIndex:
        return {
          class: "card-select__card",
          click: () => {},
          aniState: "active",
        };
      case activeIndex - 1:
        return {
          class: "card-select__card--before",
          click: decIndex,
          aniState: "before",
        };
      case activeIndex + 1:
        return {
          class: "card-select__card--after",
          click: incIndex,
          aniState: "after",
        };
      default:
        if (i > activeIndex) {
          return {
            class: "card-select__card--hidden",
            click: decIndex,
            aniState: "afterHidden",
          };
        }
        if (i < activeIndex) {
          return {
            class: "card-select__card--hidden",
            click: decIndex,
            aniState: "beforeHidden",
          };
        }
    }
  };
  const animationStates = {
    active: { scale: 1, x: 0, opacity: 1 },
    before: { scale: 0.7, x: -300, opacity: 1 },
    after: { scale: 0.7, x: 300, opacity: 1 },
    afterHidden: { scale: 0.5, x: 500, opacity: 0 },
    beforeHidden: { scale: 0.5, x: -500, opacity: 0 },
  };

  return (
    <ul className="card-select">
      {children.map((child, i) => (
        <motion.li
          className={getValue(i).class}
          animate={getValue(i).aniState}
          variants={animationStates}
          initial={getValue(i).aniState}
          whileHover={{ y: -10 }}
          onClick={() => {
            getValue(i).click();
          }}
        >
          {child}
        </motion.li>
      ))}
    </ul>
  );
};

export default CardSelect;
