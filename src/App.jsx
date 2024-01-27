import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    if (window.confirm("Are You Sure You Want to Remove This Product")) {
      console.log("i am sure");
    } else {
      console.log("i am confused");
    }
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App;
