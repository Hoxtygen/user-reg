import { Grid } from "@mui/material";
import React, { FC } from "react";
import { FormPropType } from "../types";
import { InputField } from "./InputField";

export const PersonalInformation: FC<FormPropType> = (props) => {
  const {
    formFields: { firstName, lastName, telephone },
  } = props;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputField
            defaultProps={{
              name: firstName.name,
              label: firstName.label,
              fullWidth: true,
              placeholder: "Example: James",
            }}
          />
          <InputField
            defaultProps={{
              name: lastName.name,
              label: lastName.label,
              fullWidth: true,
              placeholder: "Example: Morris",
            }}
          />
          <InputField
            defaultProps={{
              name: telephone.name,
              label: telephone.label,
              fullWidth: true,
              placeholder: "Example: +4917212345678",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
