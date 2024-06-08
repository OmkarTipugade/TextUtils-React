import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setWordCount(countWords(inputText));
  };

  const countWords = (inputText) => {
    const trimmedText = inputText.trim();

    const words = trimmedText.split(/\s+/);

    const filteredWords = words.filter((word) => word.length > 0);

    return filteredWords.length;
  };
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
            onChange={handleChange}
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
          {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
