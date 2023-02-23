import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  FormControl,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import MenuAppBar from "../../NavBar/MenuAppBar";
import SendWaitingDatas from "./sendWaitingDatas";
import SendDeleteDatas from "./sendDeleteData";
const WaitingList = () => {
  const [books, setBooks] = useState([]);

  const [mylistbooks, setmylistBooks] = useState([]);

  const user = JSON.parse(window.localStorage.getItem("user"));
  const jwt = window.localStorage.getItem("jwt");

  useEffect(() => {
    fetch(`http://localhost:8080/book/unavailable?id=${user}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/book/mywaitinglist?id=${user}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setmylistBooks(result);
      });
  }, []);
  const [period, setPeriod] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [querry, setQuerry] = useState("");
  const [mylistquerry, setmylistQuerry] = useState("");

  const handleSubmit = (title) => {
    setTitle(title);
    SendWaitingDatas(user, title);
  };
  const handleSubmitDelete = (title) => {
    setTitle(title);
    SendDeleteDatas(user, title);
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
      <h1>Submit for waiting list!</h1>
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
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => handleSubmit(e.title)}
                    size="small"
                    key={e.id}
                  >
                    Submit
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Slider>
      </div>
      <h1>My waiting list</h1>
      <input
        type="text"
        placeholder="Search by title"
        className="search"
        onChange={(e) => setmylistQuerry(e.target.value)}
      />
      <div>
        <Slider {...settings}>
          {mylistbooks
            .filter((book) =>
              book.title.toLowerCase().includes(mylistquerry.toLowerCase())
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
                    onClick={() => handleSubmitDelete(e.title)}
                    size="small"
                    key={e.id}
                  >
                    Delete
                  </Button>
                  <FormControl
                    sx={{ minWidth: 100, maxHeight: 50 }}
                  ></FormControl>
                </CardActions>
              </Card>
            ))}
        </Slider>
      </div>
    </div>
  );
};
export default WaitingList;
