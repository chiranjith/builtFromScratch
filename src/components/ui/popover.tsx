import * as React from "react";
import {
  PopoverContent as ChakraPopoverContent,
  Portal,
} from "@chakra-ui/react";

// Define the props explicitly
interface PopoverContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  children?: React.ReactNode;
  // Add other props of ChakraPopoverContent as needed
}

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(function PopoverContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props;

  if (!portalled) {
    return <ChakraPopoverContent ref={ref} {...rest} />;
  }

  return (
    <Portal containerRef={portalRef}>
      <ChakraPopoverContent ref={ref} {...rest} />
    </Portal>
  );
});
