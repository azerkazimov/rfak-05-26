
import Button from "./button";
import { useCounter } from "../hooks/use-counter";

export default function Count() {
  const {count, increment, decrement} = useCounter();

  return (
    <div>
      <Button onClick={increment}>Increment</Button>
      <p>Count: {count}</p>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
