import React from "react";

const ProgressStepper = ({ steps, currentStep, handleStepClick }) => {
  return (
    <div className="progress-stepper__wrapper">
      <div className="progress-stepper">
        {steps.map((step, i) => (
          <>
            {i != 0 && (
              <span
                className={
                  i <= currentStep
                    ? "progress-stepper__between--filled"
                    : "progress-stepper__between"
                }
              />
            )}
            <div
              className={
                i <= currentStep
                  ? "progress-stepper__step--filled"
                  : "progress-stepper__step"
              }
            >
              <div className="progress-stepper__dot"></div>
              <a
                onClick={() => {
                  handleStepClick(i);
                }}
              >
                {step}
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProgressStepper;
