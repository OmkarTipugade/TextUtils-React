import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    console.log("on Change");
    setText(e.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${
              props.mode === "dark" ? "light" : "dark"
            } bg-${props.mode === "light" ? "light" : "dark "}`}
            value={text}
            id="my-box"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className={`btn btn-primary text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={handleUpClick}
        >
          Convert to upper case
        </button>
        <button
          className={`mx-4 btn btn-primary text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={handleLoClick}
        >
          Convert to lower case
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
