import React from "react";
import ButtonMUI from "@mui/material/Button";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "text" | "contained" | "outlined";
  onClick: () => void;
}

const Button = ({ children, variant = "contained", onClick }: ButtonProps) => {
  return (
    <ButtonMUI variant={variant} onClick={onClick}>
      {children}
    </ButtonMUI>
  );
};

export default Button;
