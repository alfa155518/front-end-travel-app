import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import logo from "../images/logo.WebP";
import { useState } from "react";
import "../sass/layout/nav-bar.css";

function NavBar() {
  const [activeBar, setActiveBar] = useState(false);
  return (
    <nav className="flex items-center justify-around flex-wrap pt-5 mt-4">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-36 hover:scale-110" />
        </Link>
      </div>
      <ul
        className={`links flex items-center flex-wrap ${
          activeBar ? "active__bar" : "none__active__bar"
        }`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/tours">tours</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
      </ul>
      {localStorage.getItem("photo") ? (
        <>
          <img
            src={JSON.parse(localStorage.getItem("photo"))}
            className="user__logo"
            alt="user img"
          />
        </>
      ) : (
        <button className="send-data">
          <Link to="/signup">Create Account</Link>
        </button>
      )}
      <div className="bars hidden" onClick={() => setActiveBar(!activeBar)}>
        <HiBars3BottomRight />
      </div>
    </nav>
  );
}

export default NavBar;
