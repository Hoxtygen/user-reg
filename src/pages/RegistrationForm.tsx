import {
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { useEffect, useState } from "react";
import SuccessPage from "../components/SuccessPage";
import { BASE_URL, sleep, STEPS } from "../utils/helpers";
import { initialValues } from "../utils/initialValues";
import { renderForm } from "../utils/renderForm";
import useRequest from "../utils/useRequest";
import { validationSchema } from "../utils/validationSchema";

export const RegistrationForm = () => {
  const myStep = localStorage.getItem("activeStep");
  const [loadSaved, setLoadSaved] = useState<FormikValues>(null);
  const [activeStep, setActiveStep] = useState(Number(myStep) || 0);
  const activeValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === STEPS.length - 1;
  const { loading, error, data, makeRequest } = useRequest();

  useEffect(() => {
    const savedFormData = localStorage.getItem("savedFormData");
    setLoadSaved(JSON.parse(savedFormData));
  }, []);

  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    await sleep(1000);
    actions.setSubmitting(false);
    values.customerId = 1;
    makeRequest(BASE_URL, values);
  };

  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (isLastStep) {
      localStorage.setItem("savedFormData", JSON.stringify(values));
      localStorage.setItem("activeStep", JSON.stringify(activeStep));
      submitForm(values, actions);
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
      localStorage.setItem("savedFormData", JSON.stringify(values));
      localStorage.setItem("activeStep", JSON.stringify(activeStep));
    }
  };
  return (
    <main className="main">
      <div className="main-inner">
        {error && <p className="error">{error}</p>}
        {activeStep === STEPS.length ? (
          <SuccessPage />
        ) : (
          <>
            <Stepper activeStep={activeStep}>
              {STEPS.map((label) => (
                <Step  key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik
              initialValues={loadSaved || initialValues}
              validationSchema={activeValidationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {(formikProps) => (
                <Form>
                  {renderForm(activeStep)}
                  <div className="ctrl-btn-wrapper">
                    {activeStep > 0 && (
                      <button
                        onClick={() => setActiveStep((prev) => prev - 1)}
                        className = "btn"
                      >
                        Back
                      </button>
                    )}

                    <div>
                      <button
                        type="submit"
                        disabled={formikProps.isSubmitting}
                        className = "btn"
                      >
                        {isLastStep ? "Submit" : "Next"}
                      </button>
                      {formikProps.isSubmitting && <CircularProgress />}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        )}
      </div>
    </main>
  );
};
