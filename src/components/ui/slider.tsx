import {
  Slider as ChakraSlider,
  HStack,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  FormLabel,
  SliderProps as ChakraSliderProps, // Renamed here
} from "@chakra-ui/react";

import * as React from "react";

export interface SliderProps extends ChakraSliderProps {
  marks?: Array<number | { value: number; label: React.ReactNode }>;
  label?: React.ReactNode;
  showValue?: boolean;
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  function Slider(props, ref) {
    const { marks: marksProp, label, showValue, ...rest } = props;
    const value = props.defaultValue ?? props.value;

    const marks = marksProp?.map((mark) => {
      if (typeof mark === "number") return { value: mark, label: undefined };
      return mark;
    });

    const hasMarkLabel = !!marks?.some((mark) => mark.label);

    return (
      <div>
        {label && !showValue && (
          <FormLabel fontWeight="medium">{label}</FormLabel>
        )}
        {label && showValue && (
          <HStack justify="space-between">
            <FormLabel fontWeight="medium">{label}</FormLabel>
            <span>{value}</span> {/* Use a custom value display */}
          </HStack>
        )}
        <ChakraSlider ref={ref} {...rest}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          {
            Array.isArray(value) &&
              value.map((_, index) => (
                <SliderThumb key={index} />
              )) /* Remove the `index` prop */
          }
          {marks?.length && (
            <>
              {marks.map((mark, index) => {
                const value = typeof mark === "number" ? mark : mark.value;
                const label = typeof mark === "number" ? undefined : mark.label;
                return (
                  <SliderMark key={index} value={value}>
                    {label}
                  </SliderMark>
                );
              })}
            </>
          )}
        </ChakraSlider>
      </div>
    );
  }
);
