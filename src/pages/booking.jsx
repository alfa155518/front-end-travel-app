import { useContext } from "react";
import HeroSection from "../components/heroSection";
import Footer from "../layout/footer";
import NavBar from "../layout/navBar";
import { TourContext } from "../context/TourManagement";
import Tour from "../components/tour";
import "../sass/pages/booking.css";
import EmptySection from "../components/emptySection";
function Booking() {
  const { allBookings } = useContext(TourContext);
  return (
    <>
      <NavBar />
      {allBookings.length <= 0 ? (
        <EmptySection sectionName={"There Is No Tour Booked"} />
      ) : (
        <>
          <div className="booking__section">
            <HeroSection sectionName={"Booking"} />
          </div>
          <section className="all__bookings">
            <Tour tours={allBookings} btnDelete={"delete"} />
          </section>
        </>
      )}
      <Footer />
    </>
  );
}

export default Booking;
