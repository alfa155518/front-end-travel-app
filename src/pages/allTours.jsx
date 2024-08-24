import { useContext } from "react";
import { TourContext } from "../context/TourManagement";
import { useQuery } from "@tanstack/react-query";
import NavBar from "../layout/navBar";
import Footer from "../layout/footer";
import TourComponent from "../components/tour.jsx";
import HeroSection from "../components/heroSection.jsx";
import Pagination from "../components/pagination.jsx";
import "../sass/pages/all-tours.css";
function AllTours() {
  const { Tours } = useContext(TourContext);

  return (
    <>
      <NavBar />
      <div className="hero__tours">
        <HeroSection sectionName={"All Tours"} />
      </div>
      <section className="tours__container">
        <TourComponent tours={Tours} />
      </section>
      <Pagination />
      <Footer />
    </>
  );
}

export default AllTours;
