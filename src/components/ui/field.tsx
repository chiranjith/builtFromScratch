import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import * as React from "react";

export interface FieldProps {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  isRequired?: boolean;
  children: React.ReactNode;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const { label, children, helperText, errorText, isRequired, ...rest } =
      props;
    return (
      <Box mb={4}>
        <FormControl
          ref={ref}
          isInvalid={!!errorText}
          isRequired={isRequired}
          {...rest}
        >
          {label && <FormLabel>{label}</FormLabel>}
          {children}
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
        </FormControl>
      </Box>
    );
  }
);
