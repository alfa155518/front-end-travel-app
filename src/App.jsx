import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/home";
import TourManagement from "./context/TourManagement";
import TourInfo from "./pages/tourInfo";
import AllTours from "./pages/allTours";
import About from "./pages/about";
import Booking from "./pages/booking";

function App() {
  return (
    <TourManagement>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<AllTours />} />
        <Route path="/:tourId" element={<TourInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </TourManagement>
  );
}

export default App;
