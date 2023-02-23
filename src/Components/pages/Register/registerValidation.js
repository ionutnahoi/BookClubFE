export default function registerValidation(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  if (!values.firstname) {
    errors.firstname = "First name is required!";
  } else if (values.firstname.length < 3)
    errors.firstname = "First Name needs to be 3 characters or more!";

  if (!values.lastname) {
    errors.lastname = "First name is required!";
  } else if (values.lastname.length < 3)
    errors.lastname = "Last Name needs to be 3 characters or more!";

  return errors;
}
