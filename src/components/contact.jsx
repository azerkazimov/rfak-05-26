// import { useEffect, useState } from "react";
import { useUsers } from "../services/user.service";
import Counter from "./counter";
import Loading from "./loading";


export default function Contact() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users')
  //   .then(response => response.json())
  //   .then(data => setUsers(data))
  //   .catch(error => console.error('Error fetching users:', error))
  //   .finally(() => console.log('Users fetched'));
  // },[])

  // use tanstack query
  // const {data: users, isLoading, isError, error} = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () => fetch('https://api.github.com/users').then(response => response.json())
  // })

  const {data: users, isLoading, isError, error} = useUsers();

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error.message}</div>;

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
