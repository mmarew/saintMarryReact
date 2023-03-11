import React, { useEffect } from "react";
import "./Nav.css";
import $ from "jquery";
import navbar_logo from "./Images/navbar_logo.png";
import { Link } from "react-router-dom";
function Nav() {
  let setActiveNavBar = (e) => {
    let navId = e.target.id;
    console.log(navId);
    if (navId.startsWith("home")) {
      $("Footer").addClass("homeClass");
      $("nav").removeClass("noneHomeNav");
      $(".navLinks").removeClass("noneHomeNav");
      $("#homeImg").addClass("logoImgHome");
      $(".footerLogo").addClass("logoImgHome");
    } else {
      $(".footerLogo").addClass("logoImgHome");
      $("#homeImg").removeClass("logoImgHome");
      $(".navLinks").addClass("noneHomeNav");
      $("footer").removeClass("homeClass");
      $("nav").addClass("noneHomeNav");
    }
  };
  // next js,tailwind,
  useEffect(() => {
    $(".navLinks").on("click", setActiveNavBar);
  }, []);
  return (
    <nav>
      <ul id="navToHome">
        <li>
          <Link className="navLinks" id="homeLogo" to="/Home">
            <img id="homeImg" className="logoImg" src={navbar_logo} />
          </Link>
        </li>
        {/* <li className="textPEMM">
          <Link className="navLinks" id="homePEMM" to="/Home">
            PEMM
          </Link>
        </li> */}
        {/* <li className="PEMMCountry">
          <Link className="navLinks" id="homeCountry" to="/Home">
            PRINCETON ETHIOPIAN ERITREA & EGYPTIAN MIRACLE OF MARY PROJECT
          </Link>
        </li> */}
      </ul>
      <ul className="rightUL">
        <li>
          <Link className="navLinks" id="navToStories" to="/Stories">
            Stories
          </Link>
        </li>
        <li>
          <Link className="navLinks" id="navToPaintings" to="/Paintings">
            Paintings
          </Link>
        </li>
        <li>
          <Link className="navLinks" id="navToManuscript" to="/Manuscript">
            Manuscript
          </Link>
        </li>
        <li>
          <Link className="navLinks" id="navToResearch" to="/Research">
            Research Tools
          </Link>
        </li>
        <li>
          <Link className="navLinks" id="navToAbout" to="/About">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
