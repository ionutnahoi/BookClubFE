import { useEffect } from "react";
import decoder from "../../jwtDecoder/decoder";
export default function sendDatas(values) {
  const account = {
    username: values.username,
    password: values.password,
  };
  console.log(JSON.stringify(account));

  const jwt = decoder();
  console.log(jwt);

  fetch(
    `http://localhost:8080/users/login?username=${values.username}&password=${values.password}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${jwt.decoded}` },
      body: JSON.stringify(account),
    }
  ).then((res) => {
    if (res.status === 200) {
      //   alert("ok");
      console.log(res.status);
      res.json().then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
      });
      window.location.href = "/MainPage";
    } else {
      alert("wrong data!");
      window.location.href = "/Login";
    }
  });
}
