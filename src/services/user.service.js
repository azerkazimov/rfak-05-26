// useQuery hook
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('https://api.github.com/users').then(response => response.json())
  })
}
