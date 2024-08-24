import { useParams } from "react-router-dom";
import MapBox from "./map";
import TourDetails from "../sections/tourDetails";
import { useQuery } from "@tanstack/react-query";
import Footer from "../layout/footer";
import NavBar from "../layout/navBar";
import Reviews from "../components/reviews";
import "../sass/pages/tour-info.css";
import axios from "axios";

function TourInfo() {
  const { tourId } = useParams();
  const { data: tour } = useQuery({
    queryKey: ["tour", tourId],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/tours/${tourId}`
        );
        const data = await response.data;
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
        {tour && <TourDetails tour={tour} />}
        {tour && <MapBox tourLocations={tour} />}
        {tour && <Reviews tour={tour} />}
      </div>
      <Footer />
    </>
  );
}

export default TourInfo;
