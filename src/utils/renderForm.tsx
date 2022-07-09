import { AddressInformation } from "../components/AddressInformation";
import PaymentInformation from "../components/PaymentInformation";
import { PersonalInformation } from "../components/PersonalInformation";
import { formModel } from "./formModels";

export const renderForm = (step: number) => {
  const { formFields } = formModel;

  switch (step) {
    case 0:
      return <PersonalInformation formFields={formFields} />;
    case 1:
      return <AddressInformation formFields={formFields} />;
    case 2:
      return <PaymentInformation formFields={formFields} />;
  }
};
