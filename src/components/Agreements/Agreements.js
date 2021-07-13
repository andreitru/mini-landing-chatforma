import React from "react";
import "./agreements.css";

export function Agreements() {
  return (
    <p className="agreements">При заполнении своих данных вы автоматически соглашаетесь с&nbsp;
      <a
        href="https://www.chatforma.com/policy"
        rel="noreferrer"
        target="_blank"
        className="agreements__link">
        политикой конфиденциальности
      </a>
    </p>
  );
}