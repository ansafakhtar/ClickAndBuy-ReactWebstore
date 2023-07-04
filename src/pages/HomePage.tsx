import BestSellers from "../components/BestSellers/BestSellers";
// import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";

const HomePage: React.FC = () => {
    return (
      <>
        {/* <Hero /> */}
        <BestSellers />
        <Slider />
        {/* <Banner
          title="Creative harmonious living"
          text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
          img={Banner1}
        />
        <TrendingSlider />
        <BannerReverse
          title="Comfortable & Elegante Living"
          text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
          img={Banner2}
        />
        <Newsletter /> */}
        {/* <Footer /> */}
      </>
    );
  }
  
  export default HomePage;