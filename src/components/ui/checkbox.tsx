import {
  Checkbox as ChakraCheckbox,
  CheckboxProps as ChakraCheckboxProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface CheckboxProps extends ChakraCheckboxProps {
  // Add any custom props here
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const { children, ...rest } = props;
    return (
      <ChakraCheckbox ref={ref} {...rest}>
        {children}
      </ChakraCheckbox>
    );
  }
);
