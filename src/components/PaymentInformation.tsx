import { Grid } from "@mui/material";
import React, { FC } from "react";
import { FormPropType } from "../types";
import { InputField } from "./InputField";

const PaymentInformation: FC<FormPropType> = (props) => {
  const {
    formFields: { owner, iban },
  } = props;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputField
            defaultProps={{
              name: owner.name,
              label: owner.label,
              fullWidth: true,
            }}
          />
          <InputField
            defaultProps={{
              name: iban.name,
              label: iban.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentInformation;
