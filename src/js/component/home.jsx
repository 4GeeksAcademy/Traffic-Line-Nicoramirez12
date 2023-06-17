import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");

  const changeLight = (newColor) => {
    setColor(newColor);
  };

  const changeButtonColor = () => {
    const button = document.getElementById("changeButton");
    button.style.backgroundColor = "green";
  };

  return (
    <div>
      <div className="justify-content-center d-flex">
        <div className="bg-dark traffic-light">
          <div
            onClick={() => changeLight("red")}
            className={"light red" + (color === "red" ? " light-glow" : "")}
          ></div>
          <div
            onClick={() => changeLight("yellow")}
            className={
              "light yellow" + (color === "yellow" ? " light-glow" : "")
            }
          ></div>
          <div
            onClick={() => changeLight("green")}
            className={
              "light green" + (color === "green" ? " light-glow" : "")
            }
          ></div>
        </div>
      </div>
      <button id="changeButton" onClick={changeButtonColor}>
        Change light
      </button>
    </div>
  );
};

export default Home;
