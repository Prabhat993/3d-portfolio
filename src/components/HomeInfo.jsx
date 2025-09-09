import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

// This is a small, reusable component for the pop-up boxes in stages 2, 3, and 4
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const HomeInfo = ({ currentStage }) => {
  switch (currentStage) {
    case 1:
      return (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
          Hi, I'm <span className='font-semibold mx-2 text-white'>Prabhat Kumar Pal</span> 👋
          <br />
          A passionate Web Developer and 3D Animation Designer.
          <br />and Java Developer, Ai Enthusiastic
        </h1>
      );
    case 2:
      return (
        <InfoBox
          text="Worked on diverse projects and gained valuable hands-on experience."
          link="/about"
          btnText="Learn more about me"
        />
      );
    case 3:
      return (
        <InfoBox
          text="Here are some of the projects I've built. Curious to see?"
          link="/projects"
          btnText="Visit my portfolio"
        />
      );
    case 4:
      return (
        <InfoBox
          text="Contact Me !"
          link="/contact"
          btnText="Let's talk"
        />
      );
    default:
      return null;
  }
};

export default HomeInfo;