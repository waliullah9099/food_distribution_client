import Hero from "@/pages/home/Hero";
import SuppliesPost from "./posts/SuppliesPost";
import Testemonial from "./Testemonial";
import Gallery from "./Gallery ";
import About from "./About/About";
import HanpingHand from "./halpingHand/HanpingHand";
import Volunteer from "./Volunteer/Volunteer";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <SuppliesPost />
      <Testemonial />
      <Gallery />
      <About />
      <HanpingHand />
      <Testimonial />
      <Volunteer />
    </div>
  );
};

export default Home;
