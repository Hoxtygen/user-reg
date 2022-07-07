import { formModel } from "./formModels";

const { formFields: { firstName, lastName, telephone, street, houseNumber, city, zipCode, accountOwner, IBAN } } = formModel

export const initialValues = {
	[firstName.name]: "",
	[lastName.name]: "",
	[telephone.name]: "",
	[street.name]: "",
	[houseNumber.name]: "",
	[city.name]: "",
	[zipCode.name]: "",
	[accountOwner.name]: "",
	[IBAN.name]: ""
}