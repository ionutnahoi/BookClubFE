import React from "react";
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
import { useEffect, useState } from "react";
import MenuAppBar from "../../NavBar/MenuAppBar";

import NavBarLogged from "../../NavBar/navbarLogged";
import "./availableBooks.css";
import BorrowUseForm from "./borrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Availablebooks() {
  const [books, setBooks] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("user"));
  const jwt = window.localStorage.getItem("jwt");

  useEffect(() => {
    fetch(`http://localhost:8080/book/available?id=${user}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      });
  }, []);
  const [period, setPeriod] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [querry, setQuerry] = useState("");

  const handleSubmit = (title) => {
    setTitle(title);
    BorrowUseForm(period, title);
  };

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div>
      <MenuAppBar />
      <h1>Available books</h1>
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
              <Card sx={{ maxWidth: 400 }} key={e.id}>
                <CardMedia
                  component="img"
                  alt="book"
                  height="140"
                  image="https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_549881917_361412.jpg"
                />
                <CardContent>
                  <Typography
                    value={title}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
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
                    Borrow
                  </Button>
                  <FormControl sx={{ minWidth: 100, maxHeight: 50 }}>
                    <InputLabel>Period</InputLabel>
                    <Select
                      labelId="period"
                      id="period"
                      value={period}
                      label="Days to borrow"
                      onChange={handleChange}
                    >
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={21}>21</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  </FormControl>
                </CardActions>
              </Card>
            ))}
        </Slider>
      </div>
    </div>
  );
}
