import React from "react";
import "./button.css";
import classNames from "classnames";

export function Button({ bot, setButtonId }) {
  const buttonClassNames = classNames({
    "btn-reset": true,
    "btn": true,
    "btn-telegram": bot.type === "telegram",
    "btn-vk": bot.type === "vk",
    "btn-fb": bot.type === "fb",
    "btn-viber": bot.type === "viber"
  })

  const btnNames = {
    telegram: "Telegram",
    viber: "Viber",
    fb: "Facebook",
    vk: "Vkontakte"
  }

  function handleClick(e) {
    setButtonId(e.target.closest("button").id)
  }

  return (
    <button
      onClick={handleClick}
      id={bot.type}
      className={buttonClassNames}>
      <span className="btn__text">
        {bot["start_button_title"] || btnNames[bot.type]}
      </span>
    </button>
  );
}