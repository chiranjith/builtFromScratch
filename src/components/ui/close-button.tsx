import {
  CloseButton as ChakraCloseButton,
  CloseButtonProps as ChakraCloseButtonProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface CloseButtonProps extends ChakraCloseButtonProps {
  // Add any custom props here
}

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(function CloseButton(props, ref) {
  return <ChakraCloseButton ref={ref} {...props} />;
});
