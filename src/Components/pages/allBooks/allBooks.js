import React, { useEffect, useState } from "react";
import MenuAppBar from "../../NavBar/MenuAppBar";
import Slider from "react-slick";
import axios from "axios";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const [querry, setQuerry] = useState("");
  const user = JSON.parse(window.localStorage.getItem("user"));
  const jwt = window.localStorage.getItem("jwt");

  useEffect(() => {
    axios
      .get("http://localhost:8080/wishlist/available", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        setBooks(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const handleSubmit = (title) => {
    fetch(
      `http://localhost:8080/wishlist/addwishlist?idUser=${user}&title=${title}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${jwt}` },
      }
    ).then((res) => {
      if (res.status !== 200) {
        alert("Something went wrong!");
        window.location.href("/MainPage");
      } else if (res.status === 200) {
        alert("Succesfully added the book to wish list!");
        window.location.reload();
      }
    });
  };

  console.log(books);
  return (
    <>
      {/* {getBooks()} */}
      <MenuAppBar />
      <h1>All Books</h1>
      <input
        type="text"
        placeholder="Search by title"
        className="search"
        onChange={(e) => setQuerry(e.target.value)}
      />
      <div>
        <Slider {...settings}>
          {books
            .filter((book) =>
              book.title.toLowerCase().includes(querry.toLowerCase())
            )
            .map((e) => (
              // getBook(e.borrowed_book.title),
              <Card sx={{ maxWidth: 400 }} key={e.id}>
                {console.log(e.id)}
                <CardMedia
                  component="img"
                  alt="book"
                  height="140"
                  image="https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_549881917_361412.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.title}
                  </Typography>
                  <Typography variant="h7" component="div">
                    {"Author: " + e.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {"Description:\n" + e.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => handleSubmit(e.title)}
                    size="small"
                    key={e.id}
                  >
                    Wish List
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Slider>
      </div>
    </>
  );
};
export default AllBooks;
