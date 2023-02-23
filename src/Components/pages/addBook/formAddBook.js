import React, { useState } from "react";
import "./form.css";
import AddBook from "./addBook";
import NavBarLogged from "../../NavBar/navbarLogged";
import MainPage from "../MainPage/mainPage";
import AddBookSuccess from "./addBookSuccess";
import MenuAppBar from "../../NavBar/MenuAppBar";

const FormAddBook = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <MenuAppBar />
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="/book.jpeg" alt="book" />
        </div>
        {!isSubmitted ? (
          <AddBook submitForm={submitForm} />
        ) : (
          <AddBookSuccess />
        )}
      </div>
    </>
  );
};

export default FormAddBook;
