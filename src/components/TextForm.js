import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    // console.log("uppercase was clicked"+text);
    let newText = text.toUpperCase();
    props.showAlert("text is converted to upper case", "success");
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("uppercase was clicked"+text);
    let newText = text.toLocaleLowerCase();
    props.showAlert("text is converted to lower case", "success");
    setText(newText);
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const handleCopying = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text is copied", "success");
    document.getSelection().removeAllRanges();
  };

  // const HandleReplacefrom = (event) => {
  //   if (text.includes(event.target.value)) {
  //     var newText = event.target.value;

  //     // return newText
  //   }
  //   return newText;
  // };
  // var HandleReplacewith = (event) => {
  //   console.log(event.target.value);
  //   return event.target.value;
  // };

  // const HandleReplace = (event) => {
  //   var to = HandleReplacefrom();
  //   console.log(to);
  // };
  const handleCapitalize = () => {
    // .map will take each element from the array  which was created by the split function and change its first element

    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    props.showAlert("First letter converted to upper case", "success");
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    props.showAlert("text is cleared", "success");
    setText(newText);
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces has been managed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#24171a"
                    : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                    ? "#042743"
                    : "white",
                    color:  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ?"white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#24171a"
                    : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                    ? "#042743"
                    : "white",
                    color:  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ?"white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
        disabled={text.length===0}
          className="btn btn-primary mx-2 my-3"
          style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#24171a"
                    : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                    ? "#042743"
                    : "white",
                    color:  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ?"white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
          onClick={handleUpClick}
        >
          {" "}
          Convert To UpperCase
        </button>
        <button
         disabled={text.length===0}
          className="btn btn-primary mx-2 my-3"
          style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#24171a"
                    : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                    ? "#042743"
                    : "white",
                    color:  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ?"white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
          onClick={handleLowClick}
        >
          {" "}
          Convert To LowerCase
        </button>
        <button
         disabled={text.length===0}
          className="btn btn-primary mx-2 my-3"
          style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#24171a"
                    : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                    ? "#042743"
                    : "white",
                    color:  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ?"white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
          onClick={handleCopying}
        >
          {" "}
          Copy To Clipboard
        </button>
        <button
         disabled={text.length===0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleCapitalize}
          style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#24171a"
                    : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                    ? "#042743"
                    : "white",
                    color:  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ?"white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
        >
          {" "}
          Capitilize first letter
        </button>
        <button
         disabled={text.length===0}
          className="btn btn-primary mx-2 my-3"
          style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#24171a"
                    : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                    ? "#042743"
                    : "white",
                    color:  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ?"white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
          onClick={handleClear}
        >
          {" "}
          Clear All
        </button>
        <button
         disabled={text.length===0}
          className="btn btn-primary mx-2 my-3"
          style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#24171a"
                    : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                    ? "#042743"
                    : "white",
                    color:  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ?"white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
          onClick={handleSpaces}
        >
          {" "}
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#24171a"
                    : props.mode === "info"
                    ? "#146c80"
                    : props.mode === "danger"
                    ? "#9e130e"
                    : props.mode === "warning"
                    ? "#c9c90c"
                    : props.mode === "primary"
                    ? "#042743"
                    : "white",
                    color:  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ?"white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
      >
        <h3>Your text Summery</h3>
        <p>
          {" "}
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words And {text.length} chara
        </p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} Minutes read</p>
        <h3>Previwe</h3>
        <p>{text.length > 0 ? text : "Nothing to previwe"}</p>
      </div>
    </>
  );
}
