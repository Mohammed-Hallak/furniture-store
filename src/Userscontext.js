import { createContext, useState } from "react";

export let Users = createContext([]);

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <Users.Provider value={{ users, setUsers }}>{children}</Users.Provider>
  );
}
