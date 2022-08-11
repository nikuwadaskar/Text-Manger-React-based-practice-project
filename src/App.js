
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeClasses = () => {
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
  };

  const toggleMode = (cls) => {
    removeClasses();
    // console.log(cls);

    if (cls === "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.classList.add("bg-" + cls)
    } else if (cls === "dark") {
      setMode("dark");
      // document.body.classList.add("bg-" + cls);
      document.body.style.backgroundColor = "#24171a";
    } else if (cls === "danger") {
      setMode("danger");
      document.body.style.backgroundColor = "#9e130e";
      // document.body.classList.add("bg-" + cls);
    } else if (cls === "warning") {
      setMode("warning");
      document.body.style.backgroundColor = "#c9c90c";
      // document.body.classList.add("bg-" + cls);
    } else if (cls === "info") {
      setMode("info");
      document.body.style.backgroundColor = "#146c80";
      // document.body.classList.add("bg-" + cls);
    } else if (cls === "primary") {
      setMode("primary");
      document.body.style.backgroundColor = "#042743";
      // document.body.classList.add("bg-" + cls);
    }

    // if (mode === "light") {
    //   setMode("dark");
    //   document.body.style.backgroundColor = "#042743";
    //   showAlert("dark mode has been activated succefully", "success");
    // } else if (mode=='dark'){
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("light mode has been activated succefully", "success");
    // }
  };
  return (
    <>
      <Navbar
        title="Text Manager"
        aboutText="About Manager"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" /> */}
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
