import React from "react";
import "./madein.css";

export function MadeIn() {
  return (
    <p className="made-in">Сделано в&nbsp;
      <a
        href="https://chatforma.com"
        className="made-in__link"
        target="_blank"
        rel="noreferrer"
      >
        Chatforma
      </a>
    </p>
  );
}