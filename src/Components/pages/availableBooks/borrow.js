import React from "react";
import { useState, useEffect } from "react";
import Availablebooks from "./availableBooks";

const BorrowUseForm = (period, title) => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  fetch(
    `http://localhost:8080/borrow?idUser=${user.id}&title=${title}&period=${period}`,
    {
      method: "POST",
    }
  ).then((res) => {
    if (res.status === 200) {
      window.location.href = "/MainPage";
      alert("Ai imprumutat cartea cu succes!");
    }
  });
};
export default BorrowUseForm;
