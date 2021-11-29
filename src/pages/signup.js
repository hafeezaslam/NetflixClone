import React, { useState } from "react";
import { Form } from "../components";
import { FooterContainer, HeaderContainer } from "../containers";
import { useFirebase } from "../contexts/firebaseContext";
import { BROWSE } from "../constants/routes";
import { useHistory } from "react-router";

export function SignUp() {
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const isInvalid = firstName === "" || password === "" || email === "";
  const firebase = useFirebase();
  const history = useHistory();

  async function handleSignup(e) {
    e.preventDefault();
    try {
      let userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      let user = userCredential.user;
      user.updateProfile({
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1
      });
      history.push(BROWSE);
    } catch (error) {
      setFirstName("");
      setEmail("");
      setPassword("");
      setError(error.message);
    }
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     var user = userCredential.user;
    //     user
    //       .updateProfile({
    //         displayName: firstName,
    //         photoURL: Math.floor(Math.random() * 5) + 1
    //       })
    //       .then(() => {
    //         history.push(BROWSE);
    //       });
    //   })
    //   .catch((error) => {
    //     setFirstName("");
    //     setEmail("");
    //     setPassword("");
    //     setError(error.message);
    //   });
  }

  return (
    <>
      <HeaderContainer>
        <Form onSubmit={handleSignup} method="POST">
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base>
            <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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
