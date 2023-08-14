import React from "react";
import "./Text.scss";

interface TextProps {
  children: React.ReactNode;
  variant?: "regular" | "error";
  className?: string;
}

const Text = ({ children, variant = "regular", className }: TextProps) => {
  return <p className={`${variant} ${className}`}>{children}</p>;
};

export default Text;
