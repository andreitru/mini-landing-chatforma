import React from "react";
import "./preview.css";
import logo from "../../assets/img/logo.png";

export function Preview({ previewVideo, previewImage }) {
  return (<div className="preview">
    {previewVideo.split("://")[0] === "https" ? (
      <video className="preview__video" src={previewVideo} controls={true} />
    ) : (
      <img
        src={previewImage.size !== 0 ? previewImage.filepath : logo}
        alt={previewImage.size !== 0 ? previewImage["client_name"] : "logo"}
        className="preview__img"
      />
    )}
  </div>)
}