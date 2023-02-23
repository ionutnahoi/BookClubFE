import React from "react";
const DeleteWishList = (id_user, title) => {
  const jwt = window.localStorage.getItem("jwt");

  fetch(`http://localhost:8080/wishlist/delete?id=${id_user}&title=${title}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) => {
    if (res.status === 200) {
      alert("Succesfully deleted!");
      window.location.reload();
    } else {
      alert("Something went wrong! Try again!");
    }
  });
};
export default DeleteWishList;
