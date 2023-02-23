import MenuAppBar from "../../NavBar/MenuAppBar";
import Banner from "../../banner/banner.js";
import { SliderData } from "../../banner/data.js";
const MainPage = () => {
  return (
    <>
      <MenuAppBar />
      <Banner slides={SliderData} />
    </>
  );
};
export default MainPage;
