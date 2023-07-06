import TeamSvg from "../assets/Team.svg";
import Footer from "../components/Footer/Footer";

function AboutUs(): JSX.Element {
  return (
    <div>
      <img
        src={TeamSvg}
        alt="Team Image"
        style={{
          display: "flex",
          width: "50vw",
          height: "50vh",
          position:"relative",
          left: "25vw",
          top: "25vh",
        }}
      />
      <div 
        style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
          }}
        >
      <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
