import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper
} from "@mui/material";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { useState } from "react";
import { AddressInformation } from "../components/AddressInformation";
import PaymentInformation from "../components/PaymentInformation";
import { PersonalInformation } from "../components/PersonalInformation";
import SuccessPage from "../components/SuccessPage";
import { formModel } from "../utils/formModels";
import { initialValues } from "../utils/initialValues";
import { validationSchema } from "../utils/validationSchema";

export const RegistrationForm = () => {
  const steps = ["Personal Information", "Address", "Payment Information"];

  const { formFields } = formModel;
  const renderForm = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalInformation formFields={formFields} />;
      case 1:
        return <AddressInformation formFields={formFields} />;
      case 2:
        return <PaymentInformation formFields={formFields} />;
    }
  };
  const [activeStep, setActiveStep] = useState(0);
  const activeValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };
  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep((prev) => prev + 1);
  };

  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
  return (
    <main className="main">
      <div className="main-inner">
      {activeStep === steps.length ? (
        <SuccessPage />
      ) : (
        <>
        <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
        <Formik
          initialValues={initialValues}
          validationSchema={activeValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form>
              {renderForm(activeStep)}
              <div className="ctrl-btn-wrapper">
                {activeStep > 0 && (
                  <Button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    variant = "contained"
                    color="primary"
                  >
                    Back
                  </Button>
                )}

                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={formikProps.isSubmitting}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
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
