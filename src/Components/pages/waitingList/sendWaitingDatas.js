import React from "react";
const SendWaitingDatas = (id_user, title) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const jwt = window.localStorage.getItem("jwt");

  fetch(
    `http://localhost:8080/waitinglist/waiting?idUserWhoBorrow=${user}&title=${title}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  ).then((res) => {
    if (res.status === 200) {
      alert("You've been added to the waiting list!");
      window.location.reload();
    } else {
      alert("Something went wrong! Try again!");
    }
  });
};
export default SendWaitingDatas;
