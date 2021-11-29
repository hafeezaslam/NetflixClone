import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { HOME, BROWSE, SIGN_IN, SIGN_UP } from "./constants/routes";
import { Home, SignIn, SignUp, Browse } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./utils/routes";
import { useAuthListener } from "./hooks/useAuthListener";

export default function App() {
  const user = useAuthListener();
  console.log(user);

  return (
    <Router>
      <IsUserRedirect exact user={user} path={HOME} loggedInPath={BROWSE}>
        <Home />
      </IsUserRedirect>
      <IsUserRedirect user={user} path={SIGN_IN} loggedInPath={BROWSE}>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect user={user} path={SIGN_UP} loggedInPath={BROWSE}>
        <SignUp />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={BROWSE}>
        <Browse />
      </ProtectedRoute>
    </Router>
  );
}
