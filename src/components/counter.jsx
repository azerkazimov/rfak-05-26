import { useMemo, useState } from "react";

const calculation = (num) => {
  console.log("Calculation started");
  for (let i = 0; i < 1000000000000; i++) {
    return num * 2;
  }
};

export default function Counter() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // UseMemo istifade edeciyik
  const doubleNumber = useMemo(() => calculation(number), [number]);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    margin: "20px",
    padding: "20px",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <div style={themeStyles}>Counter result: {doubleNumber}</div>
    </>
  );
}
