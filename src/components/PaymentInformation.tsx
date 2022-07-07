import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { FormPropType } from "../types";
import { InputField } from "./InputField";

const PaymentInformation: FC<FormPropType> = (props) => {
  const {
    formFields: { accountOwner, IBAN },
  } = props;
  return (
    <div>
      <Typography>Payment Information</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputField
            defaultProps={{
              name: accountOwner.name,
              label: accountOwner.label,
              fullWidth: true,
            }}
          />
          <InputField
            defaultProps={{
              name: IBAN.name,
              label: IBAN.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentInformation;
