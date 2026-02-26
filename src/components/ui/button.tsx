import {
  Box, // Use Box instead of Span
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface ButtonProps extends ChakraButtonProps {
  // Add any custom props here
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { children, ...rest } = props;
    return (
      <ChakraButton ref={ref} {...rest}>
        {/* Use Box as a span if needed */}
        <Box as="span">{children}</Box>
      </ChakraButton>
    );
  }
);
