import React, { Component } from "react";
import "./NavBar.scss";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  state = {
    mobileMenu: ""
  };

  handleOnClick = () => {
    let mobileView = document.querySelector("nav");
    mobileView.style.display = "flex";
  };
  handleMenu = () => {
    let mobileFunction = window.matchMedia("(max-width: 768px)");

    if (mobileFunction.matches) {
      let mobileView = document.querySelector("nav");
      mobileView.style.display = "none";
    }
  };
  render() {
    window.onscroll = () => {
      const nav = document.querySelector("nav");

      if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
      ) {
        nav.className = "scroll";
      } else {
        nav.className = "";
      }
    };

    return (
      <>
        <nav>
          <Link
            onClick={this.handleMenu}
            activeClass="active"
            to="Header"
            spy={true}
            smooth={true}
            duration={500}
          >
            {" "}
            <FontAwesomeIcon className="font-awesome" icon={faHome} />
          </Link>
          <Link
            onClick={this.handleMenu}
            activeClass="active"
            to="AboutUs"
            spy={true}
            smooth={true}
            duration={500}
          >
            O Nas
          </Link>
          <Link
            onClick={this.handleMenu}
            activeClass="active"
            to="Offer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Dlaczego warto?
          </Link>
          <Link
            onClick={this.handleMenu}
            activeClass="active"
            to="Benefit"
            spy={true}
            smooth={true}
            duration={500}
          >
            Korzyści
          </Link>
          <Link
            onClick={this.handleMenu}
            activeClass="active"
            to="Installation"
            spy={true}
            smooth={true}
            duration={500}
          >
            Montaż
          </Link>

          <Link
            onClick={this.handleMenu}
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Kontakt
          </Link>
        </nav>
        <FontAwesomeIcon
          onClick={this.handleOnClick}
          id="menuBars"
          className="font-awesome"
          icon={faBars}
        />
      </>
    );
  }
}

export default NavBar;
