import { jsx } from "@emotion/core";
import React, { FormEvent, useState } from "react";
import "@reach/dialog/styles.css";
import "bootstrap/dist/css/bootstrap-reboot.css";
import { Dialog } from "@reach/dialog";

import { Logo } from "./assets/images/logo";
import { UserInput } from "./types";
import { Button, CircleButton } from "./components/atoms/Buttons";
import { FormGroup, LoginDiv } from "./components/atoms/FormGroup";
import { Input } from "./components/atoms/Input";
import { LoadingSpinner } from "./assets/styles/LoadingSpinner";

interface FormData extends HTMLFormControlsCollection {
  username: HTMLInputElement | string;
  password: HTMLInputElement | string;
}

interface FormElement extends HTMLFormElement {
  readonly elements: FormData;
}

interface LoginProps {
  // ({ username, password }: UserInput) => <User /> when this becomes an async call
  onSubmit: ({ username, password }: UserInput) => object;
}

function LoginForm({ onSubmit }: LoginProps) {
  const handleSubmit = (event: FormEvent<FormElement>) => {
    event.preventDefault();
    const { username, password } = event.currentTarget.elements;
    onSubmit({
      username: typeof username === "string" ? username : username.value,
      password: typeof password === "string" ? password : password.value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        "> div": {
          margin: "10px auto",
          width: "100%",
          maxWidth: "300px",
        },
      }}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input type="text" id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="username">Password</label>
        <Input type="password" id="password" />
      </FormGroup>
      <FormGroup>
        <Button variant="primary">Submit</Button>
      </FormGroup>
    </form>
  );
}

function App() {
  const [openModal, setOpenModal] = useState("none");

  const login = async (formData: UserInput) => {
    console.log(formData);
  };

  const register = async (formData: UserInput) => {
    console.log(formData);
  };

  return (
    <LoginDiv className="App">
      <Logo height="100" width="100" />
      <h1>Bookshelf</h1>
      <div>
        <Button variant="primary" onClick={() => setOpenModal("login")}>
          Login
        </Button>

        <Button variant="secondary" onClick={() => setOpenModal("register")}>
          Register
        </Button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === "login"}>
        <div>
          <CircleButton onClick={() => setOpenModal("none")}>
            <span aria-hidden>×</span>
          </CircleButton>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} />
      </Dialog>
      <Dialog aria-label="Register form" isOpen={openModal === "register"}>
        <div>
          <CircleButton onClick={() => setOpenModal("none")}>
            <span aria-hidden>×</span>
          </CircleButton>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={register} />
      </Dialog>
    </LoginDiv>
  );
}

export default App;
