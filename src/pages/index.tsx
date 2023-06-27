import Image from "next/image";
import { Inter } from "next/font/google";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const auth = useContext(AuthContext);

  return (
    <main>
      {(auth?.isAuthenticated && (
        <>
          <h1>Logged in!</h1>
          <button onClick={() => auth?.logout()}>Logout</button>
        </>
      )) || (
        <>
          <h1>Logged out!</h1>
          <button onClick={() => auth?.login("john.doe@email.com", "password")}>
            Login
          </button>
        </>
      )}
    </main>
  );
}
