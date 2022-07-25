import React, { useState } from "react";
import { Card, Input, Button, notification } from "../Auth/index";


async function login(body) {

  body = JSON.stringify(body);

  const response = await fetch(
    `http://127.0.0.1:2000/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body,
    }
  )

  const data = await response.json();

  return data;
}

export default function Login({ setFlow }) {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test@123");

  const onLogin = () => {
    login({ email, password})
    .then((data) => {
      console.log(data)
      const {token} = data.data

      localStorage.setItem("token", token);

      window.location.reload();
    })
    .catch(err => {
      alert(err.message)
    })
  }

  return (
    <Card>
      <h2>Login </h2>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="primary" onClick={onLogin}>Login</Button>
      <Button type="link" onClick={() => setFlow("register")}>
        Register yourself
      </Button>
    </Card>
  );
}
