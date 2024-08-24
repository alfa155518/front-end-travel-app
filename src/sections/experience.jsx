import useInViewAnimate from "../hooks/useInViewAnimate";
import experienceImg from "../images/experience.WebP";

function Experience() {
  // Costume Hook To Animate Elements
  const [ref, inView] = useInViewAnimate();
  return (
    <>
      <div className="section-name">
        <h3>Experience Our Unparalleled Experiences</h3>
      </div>
      <section className="experience flex items-center">
        <div
          className={`experience-content flex-1 p-[3rem] m-[1rem] animate__animated ${
            inView ? "animate__fadeInDown" : ""
          }`}>
          <h3 className="experience-name text-[3rem] p-[1rem] font-bold">
            With Our All Experiences We Well Serve You
          </h3>
          <p className="font-semibold py-[1rem] ">
            Let your wanderlust guide you to breathtaking landscapes, vibrant
            cultures, and unforgettable adventures on every tour.
          </p>
          <ul className="experience-info flex items-center text-center">
            <li className="item p-[.5rem] m-[.8rem]">
              <strong>12K +</strong>
              <span className="block">Successfully Trips</span>
            </li>
            <li className="item p-[.5rem] m-[.8rem]">
              <strong>2K +</strong>
              <span className="block">Regular clients</span>
            </li>
            <li className="item p-[.5rem] m-[.8rem]">
              <strong>15K +</strong>
              <span className="block">Years Experiences</span>
            </li>
          </ul>
          <button className="send-data jello-horizontal">
            Discover Our Tours
          </button>
        </div>
        <div
          ref={ref}
          className={`experience-img flex-1 animate__animated ${
            inView ? "animate__fadeInUpBig" : ""
          }`}>
          <img src={experienceImg} alt="experience-img" />
        </div>
      </section>
    </>
  );
}

export default Experience;
