import "./Slider.css";
import SliderItem from "./SliderItem";

const Slider: React.FC = (): JSX.Element => {
  const slideLeft = () => {
    let slider: HTMLElement | null = document.getElementById("slider");
    console.log(slider);
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft - 235;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft + 235;
    }
  };

  return (
    <div className="trending">
      <div className="container">
        <div className="title-btns">
          <h3>Trending Products</h3>
          <div className="btns">
            <button title="scroll left" onClick={slideLeft}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button title="scroll right" onClick={slideRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="row-container" id="slider">
          <SliderItem />
          {/* Future Update: Use ProductCard component here */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
