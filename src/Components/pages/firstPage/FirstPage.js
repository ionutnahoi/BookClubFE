import React from "react";
import NavBar from "../../NavBar/navBar.js";
import Banner from "../../banner/banner.js";
import { SliderData } from "../../banner/data.js";
export default function FirstPage() {
  return (
    <>
      <NavBar />
      <Banner slides={SliderData} />l
    </>
  );
}
