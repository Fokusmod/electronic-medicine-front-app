import Footer from "../Footer/Footer";
import AboutUs from "./AboutUs";
import HeadDescription from "./HeadDescription";
import Slider from "./Slider";
import UsefulLinks from "./UsefulLinks";

export default function Head() {
  return (
    <>
      <HeadDescription />
      <Slider />
      <AboutUs />
      <UsefulLinks />
      <Footer />
    </>
  );
}
