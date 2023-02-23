import React from "react";
const SendDeleteDatas = (id_user, title) => {
  //   const user = JSON.parse(window.localStorage.getItem("user"));

  fetch(
    `http://localhost:8080/waitinglist/delete?id=${id_user}&title=${title}`,
    {
      method: "DELETE",
    }
  ).then((res) => {
    if (res.status === 200) {
      alert("Succesfully deleted!");
      window.location.reload();
    } else {
      alert("Something went wrong! Try again!");
    }
  });
};
export default SendDeleteDatas;
