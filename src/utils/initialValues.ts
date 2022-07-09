import { formModel } from "./formModels";

const {
  formFields: {
    firstName,
    lastName,
    telephone,
    street,
    houseNumber,
    city,
    zipCode,
    owner,
    iban,
  },
} = formModel;

export const initialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [telephone.name]: "",
  [street.name]: "",
  [houseNumber.name]: "",
  [city.name]: "",
  [zipCode.name]: "",
  [owner.name]: "",
  [iban.name]: "",
};
