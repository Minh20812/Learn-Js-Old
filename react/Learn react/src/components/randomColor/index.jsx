import { useState, useEffect } from "react";
import "./styles.css";

export default function RandomColor() {
  const [color, setTypeColor] = useState("hex");
  const [displayCodeColor, setDisplayCodeColor] = useState("#00ffff");

  function randomCodeColor(length) {
    return Math.floor(Math.random() * length);
  }

  function generateRandomColor() {
    if (color === "hex") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomCodeColor(hex.length)];
      }
      return hexColor;
    } else if (color === "rgb") {
      const r = randomCodeColor(256);
      const g = randomCodeColor(256);
      const b = randomCodeColor(256);
      return `rgb(${r},${g},${b})`;
    } else {
      return "#00ffff"; // Default color if type is not recognized
    }
  }

  useEffect(() => {
    setDisplayCodeColor(generateRandomColor());
  }, [color]);

  return (
    <div className="randomColor" style={{ background: displayCodeColor }}>
      <div>
        <input
          type="radio"
          name="createColor"
          id="hex"
          onClick={() => setTypeColor("hex")}
          defaultChecked
        />
        <span className="textInBox">Create Hex Color</span>
      </div>

      <div>
        <input
          type="radio"
          name="createColor"
          id="rgb"
          onClick={() => setTypeColor("rgb")}
        />
        <span className="textInBox">Create Rgb Color</span>
      </div>

      <button onClick={() => setDisplayCodeColor(generateRandomColor())}>
        Generate a Random Color
      </button>

      <div className="textInBox">{displayCodeColor}</div>
    </div>
  );
}
