import Banner from "../components/Banner/Banner";
import BestSellers from "../components/BestSellers/BestSellers";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Slider from "../components/Slider/Slider";
import Banner1 from "../images/banner1.jpg";

const HomePage: React.FC = () => {
  return (
    <>
      <h1>Welcome to our store!</h1>
      <HeroSection />
      <BestSellers />
      <Banner
        title="Elevate Your Space"
        text="We offer a wide range of exquisite products that'll enhance your way of living."
        img={Banner1}
      />
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;
