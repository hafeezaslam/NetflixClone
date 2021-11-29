import React, { useState } from "react";
import { Form } from "../components";
import { FooterContainer, HeaderContainer } from "../containers";
import { useFirebase } from "../contexts/firebaseContext";
import { BROWSE } from "../constants/routes";
import { useHistory } from "react-router";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const isInvalid = password === "" || email === "";
  const firebase = useFirebase();
  const history = useHistory();

  async function handleSignin(e) {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push(BROWSE);
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
    }
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     history.push(BROWSE);
    //   })
    //   .catch((error) => {
    //     setEmail("");
    //     setPassword("");
    //     setError(error.message);
    //   });
  }

  return (
    <>
      <HeaderContainer>
        <Form onSubmit={handleSignin}>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base>
            <Form.Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
