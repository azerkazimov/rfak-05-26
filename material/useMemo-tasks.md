### Birinci code
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const numbers = [45, 12, 89, 3, 67, 23, 90, 1];

  const sortedNumbers = numbers.sort((a, b) => {
    console.log("Sorting...");
    return a - b;
  });

  return (
    <div
      style={{
        background: dark ? "#000" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <ul>
        {sortedNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;




==========================

2ci kod
import { useState } from "react";

const users = [
  "Azer",
  "Murad",
  "Nigar",
  "Orxan",
  "Leyla",
  "Kamran",
];

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredUsers = users.filter((user) => {
    console.log("Filtering...");
    return user.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        Counter {count}
      </button>

      {filteredUsers.map((user, index) => (
        <h3 key={index}>{user}</h3>
      ))}
    </div>
  );
}

export default App;

========================
3cu kod 
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  function expensiveCalculation(num) {
    console.log("Calculating...");

    for (let i = 0; i < 1000000000; i++) {}

    return num * 2;
  }

  const result = expensiveCalculation(count);

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h1>Result: {result}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setDark(!dark)}>
        Change Theme
      </button>
    </div>
  );
}

export default App;