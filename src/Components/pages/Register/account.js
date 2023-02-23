import FormSuccess from "./FormSucces";

export default function Account(values) {
  const account = {
    username: values.username,
    password: values.password,
    email: values.email,
    firstName: values.firstname,
    lastName: values.lastname,
  };
  console.log(JSON.stringify(account));
  fetch("http://localhost:8080/users/register", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(account),
  }).then((res) => {
    if (res.status === 200) {
      <FormSuccess />;
      alert("Account succesfully created!");
      window.location.reload();
    } else {
      alert("Something went wrong,try again!");
      window.location.reload();
    }
  });
}
