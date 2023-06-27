import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export type User = {
  id: string;
  name: string;
  email: string;
};

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const { setItem, removeItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    removeItem("user");
  };
  return { user, addUser, removeUser };
};
