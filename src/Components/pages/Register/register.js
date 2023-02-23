import React from "react";
import registerUserForm from "./registerUseForm";
import registerValidation from "./registerValidation";
import "./form.css";
const Register = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = registerUserForm(
    submitForm,
    registerValidation
  );
  return (
    <>
      <div className="form-content-right-register">
        <form onSubmit={handleSubmit} className="form-register" noValidate>
          <h1>Create you account!</h1>
          <div className="form-inputs-register">
            <label className="form-label-register">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input-register"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs-register">
            <label className="form-label-register">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input-register"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs-register">
            <label className="form-label-register">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input-register"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs-register">
            <label className="form-label-register">FirstName</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              className="form-input-register"
              placeholder="Enter your First Name"
              value={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p>{errors.firstname}</p>}
          </div>
          <div className="form-inputs-register">
            <label className="form-label-register">Last name </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              className="form-input-register"
              placeholder="Enter your last name"
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p>{errors.lastname}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
          <span className="form-input-login">
            Already have an account? Log in <a href="Login"> here</a>
          </span>
        </form>
      </div>
    </>
  );
};
export default Register;
