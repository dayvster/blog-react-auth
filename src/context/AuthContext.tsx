import React, { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useUser, User } from "@/hooks/useUser";
import { useLocalStorage } from "@/hooks/useLocalStorage";
export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

export const AuthContext = React.createContext<AuthContextType | null>(null!);

export const AuthProvider = (props: React.PropsWithChildren) => {
  const { login, logout, isAuthenticated } = useAuth();
  const { user } = useUser();
  const { children } = props;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
