import { useEffect, useState } from "react";
import Counter from "./counter";

export default function Contact() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error('Error fetching users:', error))
    .finally(() => console.log('Users fetched'));
  },[])
  
  return (
    <>
      <h1>Contact</h1>
      <Counter />
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} />
        </div>
      ))}
    </>
  );
}
