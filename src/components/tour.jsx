import { useContext } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { TourContext } from "../context/TourManagement";
import "../sass/components/tour.css";
function Tour({ tours, btnDelete }) {
  const { deleteTourFromBooking } = useContext(TourContext);

  return tours?.map((tour) => {
    const imgSrc = new URL(
      `../images/tours/${tour.imageCover}`,
      import.meta.url
    ).href;
    return (
      <div key={tour._id} className="tour m-3 text-center animate__animated">
        <LazyLoad>
          <div className="tour-img scale-up-ver-center">
            <img
              src={imgSrc}
              alt="tour-img"
              className="w-100 h-[26rem] object-cover "
            />
          </div>
        </LazyLoad>
        <h2 className="name text-center p-[1rem] text-[1.6rem] uppercase tracking-[0.1rem] font-medium ">
          {tour.name}
        </h2>
        <div className="about mb-[2rem] p-[0.5rem] text-[1rem]">
          <strong>{`${tour.duration} day tour`}</strong>
          <p className="summary pt-[.6rem]">{tour.summary}</p>
        </div>
        <div className="primary-info place-items-center my-[2rem] p-[1rem] justify-center">
          <div className="location flex m-[0.5rem] p-[0.5rem] items-center">
            <IoLocationOutline />
            <span>{tour.startLocation.description}</span>
          </div>
          <div className="date flex m-[0.5rem] p-[0.5rem] items-center">
            <FaCalendar />
            <span>
              {
                <>
                  {new Date(tour.startDates[0]).toLocaleString("en-US", {
                    month: "long",
                  })}{" "}
                  {new Date(tour.startDates[0]).getFullYear()}
                </>
              }
            </span>
          </div>
          <div className="people flex m-[0.5rem] p-[0.5rem] items-center">
            <IoIosPeople />
            <span>{tour.maxGroupSize} people</span>
          </div>
          <div className="days flex m-[0.5rem] p-[0.5rem] items-center">
            <FaRegCalendarDays />
            <span>{tour.duration} days</span>
          </div>
        </div>
        <div className="sub-info flex items-center justify-center px-[0.7rem]">
          <div className="right-side flex flex-col p-[.5rem] m-[.5rem]">
            <strong className="price text-orange-500 text-xl">
              ${tour.price} <span className="text-slate-300">per person</span>
            </strong>
            <span className="rating text-slate-300">
              <strong className="text-orange-500 text-xl">
                {tour.ratingsAverage}
              </strong>{" "}
              Rating ({tour.ratingsQuantity})
            </span>
          </div>
          <div className="left-side">
            {btnDelete === "delete" ? (
              <button
                className="send-data btn__delete  animate__animated animate__"
                onClick={() => deleteTourFromBooking(tour._id)}>
                <BsTrash3 />
              </button>
            ) : (
              <button className="send-data blink-1 animate__animated animate__">
                <Link to={`/${tour._id}`}>Details</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  });
}

export default Tour;
