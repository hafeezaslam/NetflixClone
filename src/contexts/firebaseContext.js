import { createContext, useContext } from "react";
import { firebase } from "../lib/firebase.prod";

const FirebaseContext = createContext(null);

export function Firebase({ children }) {
  console.log(firebase);
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  return useContext(FirebaseContext);
}
