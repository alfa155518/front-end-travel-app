/* eslint-disable react/prop-types */
import { TfiTimer } from "react-icons/tfi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import LazyLoad from "react-lazy-load";

function TourDetails({ tour }) {
  console.log(tour);
  const {
    description,
    duration,
    imageCover,
    maxGroupSize,
    name,
    price,
    ratingsAverage,
    ratingsQuantity,
    startDates,
    startLocation,
    guides,
    summary,
  } = tour;

  const imgCover = new URL(`../images/tours/${imageCover}`, import.meta.url)
    .href;
  return (
    <section className="wrapper-details">
      {/* Tour Hero */}
      <div className="tour-hero relative">
        <div className="tour-img relative">
          <img src={imgCover} alt="tour img" />
        </div>
        <div className="sub-info">
          <h1>{name}</h1>
          <ul>
            <li>
              <TfiTimer /> {duration} days
            </li>
            <li>
              <FaMapLocationDot /> {startLocation.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="primary-tour-info flex gap-2 p-7">
        <div className="details flex-1 m-2">
          <h2>Quick facts</h2>
          <ul className="facts mb-10 pb-5 m-2">
            <li>
              <i className="icon">
                <FaMapLocationDot />
              </i>
              <span>Next Day</span>
              <strong>
                {new Date(startDates[0]).toLocaleString("en-US", {
                  month: "long",
                })}{" "}
                {new Date(startDates[0]).getFullYear()}
              </strong>
            </li>
            <li>
              <i className="icon">
                <FaUserAlt />
              </i>
              <span>Participants</span>
              <strong>{maxGroupSize}</strong>
            </li>
            <li>
              <i className="icon">
                <TbStarsFilled />
              </i>
              <span>Rating</span>
              <strong>
                {ratingsQuantity} / {ratingsAverage}
              </strong>
            </li>
            <li>
              <i className="icon">
                <FaHandHoldingDollar />
              </i>
              <span>Price</span>
              <strong>${price}</strong>
            </li>
          </ul>
          <h3>Your tour guides</h3>
          <ul className="guides">
            {guides.map((guid, i) => {
              const imgGide = new URL(
                `../images/users/${guid.photo}`,
                import.meta.url
              ).href;
              return (
                <LazyLoad key={i}>
                  <li>
                    <img src={imgGide} alt={"guide"} />
                    <h4 className="uppercase">{guid.role}</h4>
                    <h5>{guid.name}</h5>
                  </li>
                </LazyLoad>
              );
            })}
          </ul>
        </div>
        <div className="about flex-1 m-2">
          <h2>About {name} Tour</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            reprehenderit expedita optio perferendis qui, consequuntur commodi
            esse assumenda dolorum nemo eos architecto animi odit, fugit ad
            eveniet culpa cum veniam.
          </p>
          <article>
            {summary} <br /> {description}
          </article>
        </div>
      </div>
    </section>
  );
}

export default TourDetails;
