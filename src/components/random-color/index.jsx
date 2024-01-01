import { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    console.log(r, g, b);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (colorType === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [colorType]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setColorType("hex")}>Create HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
      <button
        onClick={
          colorType === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
          fontSize: "20px",
          marginTop: "50px",
        }}
      >
        <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
