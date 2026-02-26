"use client";

import {
  Avatar as ChakraAvatar,
  AvatarGroup as ChakraAvatarGroup,
  AvatarGroupProps as ChakraAvatarGroupProps,
  AvatarProps as ChakraAvatarProps,
} from "@chakra-ui/react";
import * as React from "react";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export interface AvatarProps extends ChakraAvatarProps {
  name?: string;
  src?: string;
  srcSet?: string;
  loading?: ImageProps["loading"];
  icon?: React.ReactElement;
  fallback?: React.ReactNode;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  function Avatar(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, ...rest } =
      props;
    return (
      <ChakraAvatar
        ref={ref}
        src={src}
        srcSet={srcSet}
        loading={loading}
        {...rest}
      >
        <AvatarFallback name={name} icon={icon}>
          {fallback}
        </AvatarFallback>
        {children}
      </ChakraAvatar>
    );
  }
);

interface AvatarFallbackProps {
  name?: string;
  icon?: React.ReactElement;
  children?: React.ReactNode;
}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  function AvatarFallback(props, ref) {
    const { name, icon, children } = props;
    return (
      <>
        {children}
        {name != null && children == null && <>{getInitials(name)}</>}
        {name == null && children == null && icon}
      </>
    );
  }
);

function getInitials(name: string) {
  const names = name.trim().split(" ");
  const firstName = names[0] != null ? names[0] : "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

export const AvatarGroup = React.forwardRef<
  HTMLDivElement,
  ChakraAvatarGroupProps
>(function AvatarGroup(props, ref) {
  return <ChakraAvatarGroup ref={ref} {...props} />;
});
