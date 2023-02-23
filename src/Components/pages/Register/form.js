import React, { useState } from "react";
import "./form.css";
import Register from "./register";
import FormSuccess from "./FormSucces";
import NavBar from "../../NavBar/navBar";

const Form = () => {
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
        {/* {!isSubmitted ? <Register submitForm={submitForm} /> : <FormSuccess />}
         */}
        <Register submitForm={submitForm} />
      </div>
    </>
  );
};

export default Form;
