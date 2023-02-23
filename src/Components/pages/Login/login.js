import React from "react";
import NavBar from "../../NavBar/navBar.js";
import useFormLogin from "./loginUseForm.js";
import loginValidation from "./loginValidation.js";
import "./login.css";
// import "../Register/form.css";
export default function Login({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useFormLogin(
    submitForm,
    loginValidation
  );
  return (
    <>
      <div className="form-content-right-login">
        <form
          onSubmit={handleSubmit}
          className="form-login"
          noValidate
          action="/login"
        >
          <div className="form-input-login">
            <label className="form-label-login">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-inputs-login"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-input-login">
            <label className="form-label-login">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-inputs-login"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign in
          </button>
          <span className="form-input-login">
            Don't have an account? Register <a href="Register"> here</a>
          </span>
        </form>
      </div>
    </>
  );
}
