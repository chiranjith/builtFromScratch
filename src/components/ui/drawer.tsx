import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader as ChakraDrawerHeader, // Rename the imported DrawerHeader
  DrawerBody as ChakraDrawerBody, // Rename the imported DrawerBody
  DrawerFooter as ChakraDrawerFooter, // Rename the imported DrawerFooter
  DrawerContentProps,
  Portal,
  Button,
} from "@chakra-ui/react";
import { CloseButton } from "./close-button";
import * as React from "react";

// Rename your custom interface to avoid conflict
interface CustomDrawerContentProps extends DrawerContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  backdrop?: boolean;
}

// Rename your custom component to avoid conflict
export const CustomDrawerContent = React.forwardRef<
  HTMLDivElement,
  CustomDrawerContentProps
>(function CustomDrawerContent(props, ref) {
  const {
    children,
    portalled = true,
    portalRef,
    backdrop = true,
    ...rest
  } = props;

  const content = (
    <>
      {backdrop && <DrawerOverlay />}
      <DrawerContent ref={ref} {...rest}>
        {children}
      </DrawerContent>
    </>
  );

  return portalled ? (
    <Portal containerRef={portalRef}>{content}</Portal>
  ) : (
    content
  );
});

interface DrawerCloseTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any custom props here
}

export const DrawerCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  DrawerCloseTriggerProps
>(function DrawerCloseTrigger(props, ref) {
  return (
    <Button
      position="absolute"
      top="2"
      insetEnd="2"
      {...props}
      as={CloseButton}
      size="sm"
      ref={ref}
    >
      {props.children}
    </Button>
  );
});

// Re-export the imported DrawerHeader without creating a local declaration
export { ChakraDrawerHeader as DrawerHeader };

// Re-export the imported DrawerBody without creating a local declaration
export { ChakraDrawerBody as DrawerBody };

// Re-export the imported DrawerFooter without creating a local declaration
export { ChakraDrawerFooter as DrawerFooter };

// Export other components
export const DrawerRoot = Drawer;
export const DrawerBackdrop = DrawerOverlay;
export const DrawerTitle = ChakraDrawerHeader; // Use the renamed import
export const DrawerDescription = ChakraDrawerBody; // Use the renamed import
export const DrawerTrigger = Button;
export const DrawerActionTrigger = Button;
