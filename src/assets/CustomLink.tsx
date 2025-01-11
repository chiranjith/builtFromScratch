import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

interface CustomLinkProps {
  to: string; // The target URL
  state?: any; // Optional state to pass
  children: React.ReactNode; // Link text or elements
  newTab?: boolean; // Optionally open in a new tab
}

const CustomLink = ({
  to,
  state,
  children,
  newTab = false,
}: CustomLinkProps) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      state={state}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      _hover={{ textDecoration: "underline" }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
