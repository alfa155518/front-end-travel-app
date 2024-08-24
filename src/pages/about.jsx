import { GiWorld } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { TbBeach } from "react-icons/tb";

import HeroSection from "../components/heroSection";
import Footer from "../layout/footer";
import NavBar from "../layout/navBar";
import "../sass/pages/about.css";
import useInViewAnimate from "../hooks/useInViewAnimate";
function About() {
  const [ref, inView] = useInViewAnimate();
  return (
    <>
      <NavBar />
      <div className="hero__section hero__about">
        <HeroSection sectionName={"About-Us"} />
      </div>
      <div className="section-name">
        <h3>About Us</h3>
      </div>
      <section
        ref={ref}
        className={`about__container animate__animated ${
          inView ? "animate__bounceInUp" : ""
        }`}>
        <div className="card">
          <div className="card__icon">
            <GiWorld />
          </div>
          <div className="card__content">
            <h4>World Tour</h4>
            <p>
              Embark on a world tour that takes you across continents, from the
              bustling streets of Tokyo to the serene landscapes of the Swiss
              Alps. Experience the diverse cultures, breathtaking natural
              wonders, and iconic landmarks that make our planet truly unique.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              maiores.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__icon">
            <FaMapMarkedAlt />
          </div>
          <div className="card__content">
            <h4>Exotic Location</h4>
            <p>
              A world tour is more than just travel; it's an opportunity to
              discover new perspectives and create lasting memories. Imagine
              witnessing the awe-inspiring beauty of the Northern Lights in
              Iceland, or exploring the vibrant markets of Marrakech. Every stop
              on your journey presents a chance to connect with people,
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__icon">
            <TbBeach />
          </div>
          <div className="card__content">
            <h4>Beach Resort</h4>
            <p>
              A resort is a haven of relaxation and luxury, offering an escape
              from the hustle and bustle of daily life. Nestled in picturesque
              locations, whether by a pristine beach, amidst lush mountains, or
              in the heart of a vibrant city, resorts provide a perfect blend of
              comfort and adventure. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__icon">
            <MdTravelExplore />
          </div>
          <div className="card__content">
            <h4>Easy Traveling</h4>
            <p>
              Travel is an enriching journey that opens your eyes to new
              cultures, landscapes, and experiences. It’s an opportunity to step
              out of your comfort zone and immerse yourself in the beauty of the
              world, whether you're exploring ancient ruins, hiking through
              majestic mountains, or tasting exotic cuisines. Traveling allows
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
