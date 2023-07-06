import "./HeroSection.css";
import Main1 from "../../images/hero/home-img-1.webp";
import Main2 from "../../images/hero/home-img-2.webp";
import Main3 from "../../images/hero/home-img-3.webp";
import Main4 from "../../images/hero/home-img-4.webp";
import { Link } from "react-router-dom";

const HeroSection = ():JSX.Element => {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="categories/electronics">
                <div id="img1" className="lil-overlay"></div>
                <img src={Main1} alt="img1" />
                <p className="main-description">Electronics</p>
              </Link>
            </div>
            <div className="featured grid-one-low">
              <Link to="categories/chairs">
                <div id="img2" className="lil-overlay"></div>
                <img src={Main2} alt="img2" />
                <p className="main-description">Chairs</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/lamps">
                <div id="img3" className="lil-overlay"></div>
                <img src={Main3} alt="img3" />
                <p className="main-description">Lamps</p>
              </Link>
            </div>
            <div className="featured grid-three">
              <Link to="categories/kitchen">
                <div id="img4" className="lil-overlay"></div>
                <img src={Main4} alt="img4" />
                <p className="main-description">Kitchen</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
