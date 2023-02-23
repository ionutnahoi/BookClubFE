import React, { useState } from "react";
import "./login.css";
import Login from "./login";
import FirstPage from "../firstPage/FirstPage";
import NavBar from "../../NavBar/navBar";
import MainPage from "../MainPage/mainPage";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <NavBar />
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="/book.jpeg" alt="book" />
        </div>

        {!isSubmitted ? <Login submitForm={submitForm} /> : <MainPage />}
      </div>
    </>
  );
};

export default LoginForm;
