import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import LazyLoad from "react-lazy-load";
import Slider from "react-slick";
import { TourContext } from "../context/TourManagement";
import { useContext } from "react";
import "../sass/components/reviews.css";

function Reviews({ tour }) {
  const { addTourToBooking } = useContext(TourContext);

  const { duration, imageCover, reviews } = tour;

  // Slider Settings
  const settings = {
    dots: false,
    infinite: true, // Enables looping
    speed: 5000, // Transition speed (in ms)
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 0, // No delay between transitions
    cssEase: "linear", // Ensures a smooth transition
    arrows: false, // Hide navigation arrows for a cleaner look
    pauseOnHover: false, // Prevent pausing on hover
    responsive: [
      // Responsive settings
      {
        breakpoint: 1024, // Screen width at which settings change
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="all__reviews">
        <Slider {...settings}>
          {reviews.map((review) => {
            const imgPath = new URL(
              `../images/users/${review.user}`,
              import.meta.url
            ).href;
            return (
              <div key={review._id} className="review">
                <div className="reviewer__img">
                  <LazyLoad>
                    <img src={imgPath} alt="reviewer-img" />
                  </LazyLoad>
                </div>
                <p>{review.review}</p>
                <ul className="rating">
                  {review.rating === 4 ? (
                    <>
                      <li>
                        <IoStar />
                      </li>
                      <li>
                        <IoStar />
                      </li>
                      <li>
                        <IoStar />
                      </li>
                      <li>
                        <IoStarOutline />
                      </li>
                    </>
                  ) : (
                    Array.from({ length: review.rating }, (_, index) => (
                      <li key={index}>
                        <IoStar />
                      </li>
                    ))
                  )}
                </ul>
              </div>
            );
          })}
        </Slider>

        {/* Booking Box */}
      </section>
      <section className="booking__box">
        <div className="content">
          <div className="book__img">
            <LazyLoad>
              {
                <img
                  src={
                    new URL(`../images/tours/${imageCover}`, import.meta.url)
                      .href
                  }
                  alt="tour img"
                />
              }
            </LazyLoad>
          </div>
          <p>
            What Are You waiting For?
            <strong>
              {duration} Days!. 1 adventure. Infinite memories. Make it yours
              today!
            </strong>
          </p>
          <button
            className="send-data animate__animated  animate__"
            onClick={() => addTourToBooking(tour)}>
            Book Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Reviews;
