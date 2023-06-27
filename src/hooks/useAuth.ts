import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { User, useUser } from "./useUser";

export const useAuth = () => {
  const { addUser, removeUser, user } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);

  // login
  const login = (email: string, password: string) => {
    /* NOTE: this is where you would query the user from 
      an auth provider like firebase, supabase or Auth0 
      and retrieve the user object. Additionally you 
      could do your own auth, but that is not recommended
    
      So What we'll do for now is set a mock user object
    */
    addUser({ id: "1", name: "John Doe", email: email });
  };

  const logout = () => {
    removeUser();
  };

  return { login, logout, user, isAuthenticated };
};
