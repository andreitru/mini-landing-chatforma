import React from "react";
import "./description.css";

export function Description({ description }) {
  return (
    <div className="description">
      <p className="description__text">{description}</p>
    </div>
  );
}