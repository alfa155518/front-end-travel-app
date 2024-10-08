/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/loader";
import usePopularTours from "../hooks/usePopularTours";
import useAllTours from "../hooks/useAllTours";
import useNotification from "../hooks/useNotification";

export const TourContext = createContext({});

function TourManagement({ children }) {
  // costume Hook Get All Popular Tours
  const [getPopularTours] = usePopularTours();

  const [getAllTours, limit, page, setPage] = useAllTours();

  const [allBookings, setAllBookings] = useState([]);

  const [notify] = useNotification();

  const addTourToBooking = (tour) => {
    // check if tour is already
    if (allBookings.find((bookedTour) => bookedTour._id === tour._id)) {
      return notify("Tour is already booked", "error");
    }
    notify(`Tour ${tour.name} has been booked!`, "success");
    return setAllBookings([...allBookings, tour]);
  };

  // Delete Tours from all booking
  const deleteTourFromBooking = (tourId) => {
    const updatedBookings = allBookings.filter(
      (bookedTour) => bookedTour._id !== tourId
    );
    notify(`Tour  has been deleted`, "success");
    return setAllBookings(updatedBookings);
  };

  // Get Popular Tours
  const { data: popularTours, isLoading: isLoadingPopularTours } = useQuery({
    queryKey: ["allPopularTours", { page: 1, limit: 6 }],
    queryFn: ({ queryKey }) => getPopularTours(queryKey),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchInterval: 1000 * 60 * 15, // Refetch every 15 minutes
  });

  // Get All Tours
  const { data: allTours, isLoading: isLoadingTours } = useQuery({
    queryKey: ["allTours", { page, limit }],
    queryFn: ({ queryKey }) => getAllTours(queryKey),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchInterval: 1000 * 60 * 15, // Refetch every 15 minutes
  });

  //  saved bookings from local storage
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("allBookings"));
    if (savedBookings) {
      setAllBookings(savedBookings);
    }
  }, []);

  // useEffect to save bookings to local storage every time it changes
  useEffect(() => {
    localStorage.setItem("allBookings", JSON.stringify(allBookings));
  }, [allBookings]);

  // Use isLoading to check if the popular tour is still loading
  if (isLoadingTours) {
    return <Loader />;
  }

  return (
    <TourContext.Provider
      value={{
        popularTours,
        Tours: allTours,
        page: page,
        setPage: setPage,
        allBookings,
        setAllBookings,
        addTourToBooking,
        deleteTourFromBooking,
        isLoadingPopularTours,
      }}>
      {children}
    </TourContext.Provider>
  );
}

export default TourManagement;
