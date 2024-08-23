import React, { useState } from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import MyButton from "./Components/MyButton";

function App() {
  const [value, setValue] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submited");
  };
  return (
    <>
      <div className="App">
        <h2 style={{ color: "blue" }}>Button componenet with typescript</h2>
        <MyButton text="Click here" />
        <h2 style={{ color: "red" }}> Form with typescript</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the name"
            onChange={handleChange}
            value={value}
          ></input>
          <h2>Input value is : {value}</h2>
          <button type="submit">Submit</button>
        </form>
        <h2 style={{ color: "green" }}> Simple loginpage with typescript</h2>

        <LoginPage />
      </div>
    </>
  );
}

export default App;
