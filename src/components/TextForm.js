import React, { useState } from "react";
import { FaCopy, FaPaste, FaTrash, FaTextHeight, FaTextWidth } from "react-icons/fa";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied!", "success");
  };

  const handlePasteClick = async () => {
    try {
      const t = await navigator.clipboard.readText();
      setText(t);
      props.showAlert("Text pasted!", "success");
    } catch (e) {
      props.showAlert("Paste failed. Use Ctrl+V", "danger");
    }
  };

  const handleExtraSpacesRemoveClick = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="card shadow-lg p-3 mb-5 rounded"
      style={{
        backgroundColor: props.mode === "dark" ? "#1a1a2e" : "#ffffff",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h2 className="mb-3">{props.heading}</h2>
      <textarea
        className="form-control mb-3"
        value={text}
        onChange={handleOnChange}
        rows="8"
        style={{
          backgroundColor: props.mode === "dark" ? "#0f3460" : "white",
          color: props.mode === "dark" ? "white" : "black",
          border: "1px solid #ccc",
        }}
      ></textarea>

      <div className="d-flex flex-wrap">
        <button disabled={!text} className="btn btn-primary m-1" onClick={handleUpClick}>
          <FaTextHeight /> Uppercase
        </button>
        <button disabled={!text} className="btn btn-primary m-1" onClick={handleLoClick}>
          <FaTextWidth /> Lowercase
        </button>
        <button disabled={!text} className="btn btn-danger m-1" onClick={handleClClick}>
          <FaTrash /> Clear
        </button>
        <button disabled={!text} className="btn btn-success m-1" onClick={handleCopyClick}>
          <FaCopy /> Copy
        </button>
        <button className="btn btn-info text-white m-1" onClick={handlePasteClick}>
          <FaPaste /> Paste
        </button>
        <button disabled={!text} className="btn btn-warning m-1" onClick={handleExtraSpacesRemoveClick}>
          Remove Spaces
        </button>
      </div>

      <div className="mt-4">
        <h4>Your Text Summary</h4>
        <p>
          {text.split(/\s+/).filter((w) => w !== "").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((w) => w !== "").length} minutes read</p>

        <h5 className="mt-3">Preview</h5>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
