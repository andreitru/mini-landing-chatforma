import React, { useState } from "react";
import "./form.css";
import { Button } from "../Button";
import axios from "axios";

export function Form({ bots, isEmail, isPhone, idLanding, tag }) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [buttonId, setButtonId] = useState();
  const [isEmailValid, setIsEmailValid] = useState(!isEmail);
  const [isPhoneValid, setIsPhoneValid] = useState(!isPhone);

  const btnUrls = {
    telegram: "https://t.me/ChatformaNetworkingBot?start=",
    viber: "viber://pa?chatURI=<URI>&context=",
    fb: "https://m.me/104031887763145?ref=",
    vk: "https://vk.me/public183375907?ref="
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (isEmail || isPhone) {
      if (isEmailValid && isPhoneValid) {
        axios.post("https://dev.api.lp.chatforma.com/form",
          {
            idLanding: idLanding,
            email: `${email || "undefined"}`,
            phone: `${phone || "undefined"}`
          }
        )
          .then((response) => {
            const recordId = response.data.id;
            document.location.href =
              `${btnUrls[buttonId]}${tag}_${idLanding}_${recordId}`
            setPhone("");
            setEmail("");
            setIsPhoneValid(!isPhone);
            setIsEmailValid(!isEmail);
          })
          .catch((error) => console.log(error))
      }
    } else {
      document.location.href = `${btnUrls[buttonId]}${tag}_${idLanding}`
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        style={isPhone ? { display: "block" } : { display: "none" }}
        value={phone}
        type="tel"
        className="form__input"
        placeholder="Телефон"
        required={isPhone}
        onChange={(e) => {
          setPhone(e.target.value)
          setIsPhoneValid(e.target.value.length > 0)
        }}
      />
      <input
        style={isEmail ? { display: "block" } : { display: "none" }}
        value={email}
        type="email"
        className="form__input"
        placeholder="Email"
        required={isEmail}
        onChange={(e) => {
          setEmail(e.target.value)
          setIsEmailValid(e.target.validity.valid)
        }}
      />
      <div className="form__buttons">
        {bots.map((bot) =>
          <Button
            bot={bot}
            key={bot.id}
            setButtonId={setButtonId}
          />
        )}
      </div>
    </form>
  );
}