import { useState } from "react";
import Button from "./button";

export default function About() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div style={{ padding: "20px" }}>
      <h1>About</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <p>Count: {count}</p>
    </div>
  );
}
