import { useEffect, useState } from "react";
import UserCard from "./user-card";
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    };
    response();
  }, []);

  console.log(users);

  return (
    <>
      <div className="directory-container">
        <h1 className="directory-title">Team Directory</h1>

        <div className="user-grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user}/>
          ))}
        </div>
      </div>
    </>
  );
}
