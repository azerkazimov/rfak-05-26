import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const response = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data = await response.json();
      setUser(data);
    };
    response();
  }, [id]);

  console.log(user);

  if (!user) return <div>Loading...</div>;
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </>
  );
}
