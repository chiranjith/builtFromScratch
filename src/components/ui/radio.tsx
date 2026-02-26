import {
  RadioGroup as ChakraRadioGroup,
  Radio as ChakraRadio,
  RadioGroupProps,
  RadioProps as ChakraRadioProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface RadioProps extends ChakraRadioProps {
  rootRef?: React.Ref<HTMLDivElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(props, ref) {
    const { children, inputProps, rootRef, ...rest } = props;
    return (
      <ChakraRadio ref={rootRef} {...rest}>
        <input ref={ref} {...inputProps} />
        {children}
      </ChakraRadio>
    );
  }
);

export const RadioGroup: React.FC<RadioGroupProps> = ChakraRadioGroup;
