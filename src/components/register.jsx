import React, { useState } from "react";
import { Card, Input, Button } from "../Auth/index";


async function register(body) {
  body = JSON.stringify({
    user: body
  });
  const response = await fetch(
    `http://localhost:2000/users`, {
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


export default function Register({ setFlow }) {
  const [name, setName] = useState("abc");
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("abc@123");

  const onRegister = () => {
    register({name, email, password})
    .then(() => {
      alert("Registration successful")
    })
    .catch(err => {
      alert(err.message)
    })
  }

  return (
    <Card>
      <h2>Register </h2>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Button type="primary" onClick={onRegister}>Register</Button>
      <Button type="link" onClick={() => setFlow("login")}>
        Login yourself
      </Button>
    </Card>
  );
}
