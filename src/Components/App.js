import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login.js";
import Register from "./pages/Register/register";
import FirstPage from "./pages/firstPage/FirstPage";
import Form from "./pages/Register/form";
import LoginForm from "./pages/Login/loginForm";
import NavBar from "./NavBar/navBar.js";
import MainPage from "./pages/MainPage/mainPage";
import AddBook from "./pages/addBook/addBook";
import FormAddBook from "./pages/addBook/formAddBook";
import Availablebooks from "./pages/availableBooks/availableBooks";
import Borrowed from "./pages/borrowedBooks/borrowed";
import WaitingList from "./pages/waitingList/waitingList";
import MyBooks from "./pages/myBooks/myBooks";
import AllBooks from "./pages/allBooks/allBooks";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Register" element={<Form />} />
        <Route path="/Addbook" element={<FormAddBook />} />
        <Route path="/Borrowedbooks" element={<Borrowed />} />
        <Route path="/Availablebooks" element={<Availablebooks />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/WaitingList" element={<WaitingList />} />
        <Route path="/MyBooks" element={<MyBooks />} />
        <Route path="/AllBooks" element={<AllBooks />} />
      </Routes>
    </BrowserRouter>
  );
}
