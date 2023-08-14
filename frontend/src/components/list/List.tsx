import React from "react";
import "./List.scss";

interface ListProps {
  title: string;
  items: string[];
}

const List = ({ title, items }: ListProps) => {
  return (
    <ul aria-label={title} className="list">
      {/* Index for key is fine since it is read-only list */}
      {items.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
