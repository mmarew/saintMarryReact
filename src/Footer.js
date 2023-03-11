import "./Footer.css";
import React from "react";
import footer_logo from "./Images/footer_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="">
      <ul className="first-footer-child">
        <li className="firstList">
          <img id="footerLogo" className="footer_logo" src={footer_logo} />
        </li>
        <li>
          PEMM is a comprehensive resource for the 1000+ miracle stories written
          about the virgin marry in Ethiopia, Eritrea, and Egypt, and preserved
          in Geez between 1300 and the present
        </li>
      </ul>
      <ul>
        <li>
          <h3>About</h3>
        </li>
        <li>Our Mission</li>
        <li>Our Team</li>
        <li>Our History</li>
        <li>Our News</li>

        <li className="special">Event $ workshops</li>

        <li>
          volenter
          {/* <Link to="/">volenter</Link> */}
        </li>

        <li>Give FeedBack</li>
      </ul>
      <ul>
        <li>
          <h3>Explore</h3>
        </li>
        <li>Find Stories</li>
        <li>Find Painting</li>
        <li>Find Manucripts</li>
        <li className="special">Find Stories</li>
        <li>Featured Stories</li>
        <li>Featured Paintings</li>
        <li>Featured Manucripts</li>
      </ul>
      <ul>
        <li>
          <h3>Research Tools</h3>
        </li>
        <li>Incipit Tool</li>
        <li>List of Repositories</li>
        <li>Arabic Manuscript</li>
        <li>Biblography</li>
        <li>Using The Site</li>
        <li className="special">Biblography</li>
        <li>PEMM Github Repository</li>
        <li>Term of Use & copy write</li>
        <li>Accessibility</li>
      </ul>
    </footer>
  );
}

export default Footer;
