import {
  BoxProps,
  InputGroup as ChakraInputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  InputElementProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface InputGroupProps extends BoxProps {
  startElementProps?: InputElementProps;
  endElementProps?: InputElementProps;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  children: React.ReactElement;
  startOffset?: InputElementProps["paddingStart"];
  endOffset?: InputElementProps["paddingEnd"];
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const {
      startElement,
      startElementProps,
      endElement,
      endElementProps,
      children,
      startOffset = "6px",
      endOffset = "6px",
      ...rest
    } = props;

    return (
      <ChakraInputGroup ref={ref} {...rest}>
        {startElement && (
          <InputLeftElement pointerEvents="none" {...startElementProps}>
            {startElement}
          </InputLeftElement>
        )}
        {React.cloneElement(children, {
          ...(startElement && {
            paddingStart: `calc(var(--input-height) - ${startOffset})`,
          }),
          ...(endElement && {
            paddingEnd: `calc(var(--input-height) - ${endOffset})`,
          }),
          ...children.props,
        })}
        {endElement && (
          <InputRightElement placement="end" {...endElementProps}>
            {endElement}
          </InputRightElement>
        )}
      </ChakraInputGroup>
    );
  }
);
