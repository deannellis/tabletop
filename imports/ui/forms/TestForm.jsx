import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextInput from "./inputs/TextInput";
import NumberInput from "./inputs/NumberInput";
import SelectInput from "./inputs/SelectInput";

const TestForm = ({ onSubmit }) => {
  return (
    <div className="form__wrapper">
      <h1>Test Form</h1>
      <Formik
        initialValues={{
          testText: "test text",
          testNumber: 2,
          testSelect: "",
        }}
        validationSchema={Yup.object().shape({
          testText: Yup.string()
            .required("Required!")
            .min(4, "must be at least 4 characters long"),
          testNumber: Yup.number()
            .required("Required!")
            .min(0, "Must be greater than 0")
            .max(10, "Must be less than 10"),
          testSelect: Yup.string().required("Required!"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        <Form className="form">
          <TextInput
            label="Test Text"
            name="testText"
            id="testText"
            min="4"
            helperText="Enter the test text"
          />
          <NumberInput
            label="Test Number"
            name="testNumber"
            id="testNumber"
            min="0"
            max="10"
            helperText="Enter the test number"
          />
          <SelectInput label="Test Select" name="testSelect" id="testSelect">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </SelectInput>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
TestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TestForm;
