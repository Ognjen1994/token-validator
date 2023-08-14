import React from "react";
import "./Box.scss";

interface BoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return <div className="box">{children}</div>;
};

export default Box;
