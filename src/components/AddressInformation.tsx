import { Grid } from "@mui/material";
import { FC } from "react";
import { FormPropType } from "../types";
import { InputField } from "./InputField";

export const AddressInformation: FC<FormPropType> = (props) => {
  const {
    formFields: { street, houseNumber, zipCode, city },
  } = props;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputField
            defaultProps={{
              name: street.name,
              label: street.label,
              fullWidth: true,
              placeholder: "Example: JahnPlatz street",
            }}
          />

          <InputField
            defaultProps={{
              name: houseNumber.name,
              label: houseNumber.label,
              fullWidth: true,
              placeholder: "Example: 45 or 45B",
            }}
          />
          <InputField
            defaultProps={{
              name: zipCode.name,
              label: zipCode.label,
              fullWidth: true,
              placeholder: "Example: 23456",
            }}
          />
          <InputField
            defaultProps={{
              name: city.name,
              label: city.label,
              fullWidth: true,
              placeholder: "Example: Berlin",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
