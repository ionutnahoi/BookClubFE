import React from "react";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";
import App from "../App";
export default function decoder(values) {
  //   const express = require("express");
  //   const app = express();
  //   const cors = require("cors");
  //   app.use(cors({ origin: "http://localhost:3000", credentials: true }));
  axios
    .post("http://localhost:8080/users/authenticate", {
      username: values.username,
      password: values.password,
    })
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        // getUser(response.data.jwtToken);
        console.log();
        localStorage.setItem(
          "user",
          JSON.stringify(jwt_decode(response.data.jwtToken).id)
        );
        localStorage.setItem("jwt", response.data.jwtToken);
        window.location.href = "/MainPage";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
