import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Logo from "../images/logo.WebP";
import "../sass/layout/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <strong>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          non dolor veniam atque. Perferendis, tenetur.
        </strong>
        <ul className="social-links ">
          <li className="text-red-800 pulsate-fwd">
            <IoLogoYoutube />
          </li>
          <li className="text-slate-800 pulsate-fwd">
            <FaGithub />
          </li>
          <li className="text-sky-600 pulsate-fwd">
            <FaFacebook />
          </li>
          <li className="text-cyan-800 pulsate-fwd">
            <FaLinkedin />
          </li>
        </ul>
      </div>

      <div className="footer-links">
        <h3>Discover</h3>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/tours"}>Tours</Link>
          </li>
        </ul>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to={"#"}>Gallery</Link>
          </li>
          <li>
            <Link to={"#"}>Login</Link>
          </li>
          <li>
            <Link to={"#"}>Register</Link>
          </li>
        </ul>
      </div>

      <div className="footer-links">
        <h3>Contact</h3>
        <ul className="contact-links">
          <li>
            <span className="pulsate-fwd">
              <MdEmail />
            </span>{" "}
            123@example.com
          </li>
          <li>
            <span className="pulsate-fwd">
              <FaPhoneAlt />
            </span>{" "}
            +1 123 456 7890
          </li>
          <li>
            <span className="pulsate-fwd">
              <IoLocation />
            </span>{" "}
            123 Main St, City, State, ZIP Code
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
