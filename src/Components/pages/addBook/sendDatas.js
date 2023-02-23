export default function SendBookDatas(values) {
  const jwt = window.localStorage.getItem("jwt");

  const book = {
    title: values.title,
    author: values.author,
    description: values.description,
  };

  fetch("http://localhost:8080/book", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(book),
  }).then((res) => {
    addOwner();
  });
  function addOwner() {
    const user = JSON.parse(window.localStorage.getItem("user"));

    console.log(user + " " + values.title);
    fetch(
      `http://localhost:8080/owner/addOwner?idUser=${user}&title=${values.title}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    ).then((res) => {
      if (res.status !== 200) {
        alert("Something went wrong!");
        window.location.href("/Addbook");
      }
    });
  }
}
