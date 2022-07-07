import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";
import { at } from "lodash";
import React, { FC } from "react";

interface PropsType {
  errorMsg?: string;
  defaultProps: TextFieldProps;
}

export const InputField: FC<PropsType> = (props) => {
  const { errorMsg, ...restProps } = props;
  const [field, meta] = useField(props.defaultProps.name);

  const displayHelperText = () => {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  };
  return (
    <TextField
      type="text"
      error={Boolean(meta.touched && meta.error)}
      helperText={displayHelperText()}
      {...field}
      {...restProps.defaultProps}
      margin = "normal"
    />
  );
};
