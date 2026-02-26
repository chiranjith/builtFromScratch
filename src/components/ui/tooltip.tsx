import {
  Tooltip as ChakraTooltip,
  Portal,
  TooltipProps as ChakraTooltipProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface TooltipProps extends Omit<ChakraTooltipProps, "children"> {
  showArrow?: boolean;
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  content: string; // Align with Chakra UI's `content` type
  disabled?: boolean;
  children: React.ReactNode; // Add children prop explicitly
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow,
      children,
      disabled,
      portalled,
      content,
      portalRef,
      ...rest
    } = props;

    if (disabled) return <>{children}</>;

    return (
      <ChakraTooltip
        {...rest}
        content={content}
        hasArrow={showArrow} // Use `hasArrow` prop for showing the arrow
      >
        {children} {/* Use children directly as the trigger */}
      </ChakraTooltip>
    );
  }
);
