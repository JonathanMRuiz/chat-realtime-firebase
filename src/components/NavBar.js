import React from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import Button from "./Button";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };
  return (
    <nav className="nav-bar">
      <div className="brand">
        <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
        <h1>React Chat</h1>
      </div>

      {user ? (
        <button onClick={logout} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <div onClick={googleSignIn}>
          <Button />
        </div>
      )}
    </nav>
  );
};
export default NavBar;
