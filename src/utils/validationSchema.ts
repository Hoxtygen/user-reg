import { object, string } from "yup"
import { formModel } from "./formModels"


const { formFields: { firstName, lastName, telephone, street, houseNumber, city, zipCode, accountOwner, IBAN } } = formModel

export const validationSchema = [object().shape({
	[firstName.name]: string().min(2, "First name must be at least 2 characters long").required(`${firstName.errorMsg}`),
	[lastName.name]: string().min(2, "Last name must be at least 2 characters long").required(`${lastName.errorMsg}`),
	[telephone.name]: string().matches(/\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/, "Enter a valid German phone number").required(`${telephone.errorMsg}`),
}),

object().shape({
	[street.name]: string().min(5, "Street name must be at least 5 characters long").required(`${street.errorMsg}`),
	[houseNumber.name]: string().matches(/^[1-9]\d*(?:[ -]?(?:[a-zA-Z]+|[1-9]\d*))?$/, "Enter a valid house number").required(`${houseNumber.errorMsg}`),
	[city.name]: string().min(3).matches(/^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/, "Enter a valid city name").required(`${city.errorMsg}`),
	[zipCode.name]: string().matches(/^\d{5}$/).required(`${zipCode.errorMsg}`),
}),
object().shape({
	[accountOwner.name]: string().min(2, "Name must be at least 2 characters long").required(`${firstName.errorMsg}`),
	[IBAN.name]: string().matches(/^DE(?:\s*[0-9a-zA-Z]\s*){20}$/, "Enter a valid German IBAN account number").required(`${IBAN.errorMsg}`),
})
]
