import { useState } from "react";
import Button from "./button";

export default function About() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);

  // ==============================
  // console.log('1: Sinxron kod');  // sync code

  // setTimeout(() => {
  //   console.log('3: Asinxron kod');  // macro task
  // }, 0);

  // Promise.resolve().then(() => {
  //   console.log('2: Asinxron kod');  // micro task
  // });

  // console.log('4: Sinxron kod');  // sync code
  


  return (
    <div style={{ padding: "20px" }}>
      <h1>About</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <p>Count: {count}</p>
    </div>
  );
}
