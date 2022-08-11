import React from "react";

export default function About(props) {
  return (
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
        color:
          props.mode === "dark"
            ? "#dbe8e5"
            : props.mode === "info"
            ? "white"
            : props.mode === "danger"
            ? "#61ecf1"
            : props.mode === "warning"
            ? "#3636f3"
            : props.mode === "primary"
            ? "#fbd8bc"
            : "black",
      }}
    >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
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
                color:
                  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ? "white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
            >
              About this project
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
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
                color:
                  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ? "white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
            >
              <strong>My Name is Niketan Wadaskar.</strong> This project is
              created by me for resume, so in this project, the colored palate
              you see in the corner is actually different{" "}
              <strong>themes</strong> which are given to the project, we can add
              text and make several changes like managing spaces copying text
              capitalizing the first letter converting text to lower case or to
              the upper case this site will also give the info about how many
              characters are there and as will tell you estimated time to read
              the given text, this site will also show you the preview of your
              written text. <code></code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
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
                color:
                  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ? "white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
            >
              just for show nothing inside
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
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
                color:
                  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ? "white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
            >
              <strong>
                Why don't you listen told you n , nothing in here.
              </strong>{" "}
              It is hidden by default, until the collapse plugin adds the
              appropriate classNames that we use to style each element. These
              classNames control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It's also worth
              noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
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
                color:
                  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ? "white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
            >
              just for show nothing inside
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
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
                color:
                  props.mode === "dark"
                    ? "#dbe8e5"
                    : props.mode === "info"
                    ? "white"
                    : props.mode === "danger"
                    ? "#61ecf1"
                    : props.mode === "warning"
                    ? "#3636f3"
                    : props.mode === "primary"
                    ? "#fbd8bc"
                    : "black",
              }}
            >
              <strong>
                Again 🤦‍♂️ Why dont you listen told you n , nothing in here.
              </strong>{" "}
              It is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It's also worth
              noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
