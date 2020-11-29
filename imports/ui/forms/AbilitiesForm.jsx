import React from "react";
import PropTypes from "prop-types";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import NumberInput from "./inputs/NumberInput";

const AbilitiesForm = ({ onSubmit }) => {
  return (
    <div className="form__wrapper">
      <h2>Enter Abilities Scores</h2>
      <Formik
        initialValues={{
          strength: "",
          dexterity: "",
          constitution: "",
          intelligence: "",
          wisdom: "",
          charisma: "",
        }}
        validationSchema={Yup.object().shape({
          strength: Yup.number()
            .required("Required")
            .min(3, "Score must be greater than 3")
            .max(18, "Score must not exceed 18"),
          dexterity: Yup.number()
            .required("Required")
            .min(3, "Score must be greater than 3")
            .max(18, "Score must not exceed 18"),
          constitution: Yup.number()
            .required("Required")
            .min(3, "Score must be greater than 3")
            .max(18, "Score must not exceed 18"),
          intelligence: Yup.number()
            .required("Required")
            .min(3, "Score must be greater than 3")
            .max(18, "Score must not exceed 18"),
          wisdom: Yup.number()
            .required("Required")
            .min(3, "Score must be greater than 3")
            .max(18, "Score must not exceed 18"),
          charisma: Yup.number()
            .required("Required")
            .min(3, "Score must be greater than 3")
            .max(18, "Score must not exceed 18"),
        })}
        onSubmit={(scores, { setSubmitting }) => {
          onSubmit(scores);
          setSubmitting(false);
        }}
      >
        <Form className="form">
          <NumberInput
            label="Strength"
            name="strength"
            id="strength"
            min={3}
            max={18}
            helperText="Enter score"
          />
          <NumberInput
            label="Dexterity"
            name="dexterity"
            id="dexterity"
            min={3}
            max={18}
            helperText="Enter score"
          />
          <NumberInput
            label="Constitution"
            name="constitution"
            id="constitution"
            min={3}
            max={18}
            helperText="Enter score"
          />
          <NumberInput
            label="Intelligence"
            name="intelligence"
            id="intelligence"
            min={3}
            max={18}
            helperText="Enter score"
          />
          <NumberInput
            label="Wisdom"
            name="wisdom"
            id="wisdom"
            min={3}
            max={18}
            helperText="Enter score"
          />
          <NumberInput
            label="Charisma"
            name="charisma"
            id="charisma"
            min={3}
            max={18}
            helperText="Enter score"
          />
          <button className="button" type="submit">
            Submit Scores
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AbilitiesForm;
