import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Portal,
  Button,
  ModalContentProps,
} from "@chakra-ui/react";
import { CloseButton } from "./close-button";
import * as React from "react";

interface DialogContentProps extends ModalContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  backdrop?: boolean;
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(function DialogContent(props, ref) {
  const {
    children,
    portalled = true,
    portalRef,
    backdrop = true,
    ...rest
  } = props;

  const content = (
    <>
      {backdrop && <ModalOverlay />}
      <ModalContent ref={ref} {...rest}>
        {children}
      </ModalContent>
    </>
  );

  return portalled ? (
    <Portal containerRef={portalRef}>{content}</Portal>
  ) : (
    content
  );
});

interface DialogCloseTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any custom props here
}

export const DialogCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  DialogCloseTriggerProps
>(function DialogCloseTrigger(props, ref) {
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

export const DialogRoot = Modal;
export const DialogFooter = ModalFooter;
export const DialogHeader = ModalHeader;
export const DialogBody = ModalBody;
export const DialogBackdrop = ModalOverlay;
export const DialogTitle = ModalHeader;
export const DialogDescription = ModalBody;
export const DialogTrigger = Button;
export const DialogActionTrigger = Button;
