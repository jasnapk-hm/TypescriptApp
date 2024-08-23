import React from "react";
import { useState } from "react";

interface LoginProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState<LoginProps["email"]>("");
  const [password, setPassword] = useState<LoginProps["password"]>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = `${email + password}`;
    console.log("userId", userId);
    localStorage.setItem("USerID", userId);
    alert(`userID and password : ${userId}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" onChange={handleEmailChange} value={email}></input>
        <label>Password</label>
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
        ></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
