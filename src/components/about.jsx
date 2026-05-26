import Button from "./button";

export default function About() {
  const handleClick = () => alert("bye bye");

  return (
    <div style={{ padding: "20px" }}>
      <h1>About</h1>
      <Button onClick={handleClick}>lalalalla</Button>
    </div>
  );
}
