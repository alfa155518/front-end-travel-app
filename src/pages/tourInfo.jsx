import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TourContext } from "../context/TourManagement";
import MapBox from "./map";
import TourDetails from "../sections/tourDetails";
import { useQuery } from "@tanstack/react-query";
import Footer from "../layout/footer";
import NavBar from "../layout/navBar";
import Reviews from "../components/reviews";
import "../sass/pages/tour-info.css";

function TourInfo() {
  const { tourId } = useParams();

  const { data: tour } = useQuery({
    queryKey: ["tours", tourId],
    queryFn: async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/tours/${tourId}`
        );
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error fetching tour:", error);
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 15, // 15 minutes
  });

  return (
    <>
      <NavBar />
      <div className="tour-container-info ">
        <TourDetails tour={tour} />
        <MapBox tourLocations={tour} />
        <Reviews tour={tour} />
      </div>
      <Footer />
    </>
  );
}

export default TourInfo;
