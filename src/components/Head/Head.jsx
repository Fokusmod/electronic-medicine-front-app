import Footer from "../Footer/Footer";
import AboutUs from "./AboutUs";
import HeadDescription from "./HeadDescription";
import Slider from "./Slider";
import UsefulLinks from "./UsefulLinks";

export default function Head() {
  return (
    <>
      <div id="modal"></div>
      <HeadDescription />
      <Slider />
      <AboutUs />
      <UsefulLinks />
      <Footer />
    </>
  );
}
