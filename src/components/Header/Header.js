import React, { Component } from "react";
import "./Header.scss";
import NavBar from "../NavBar/NavBar";

class Header extends Component {
  render() {
    return (
      <header name="Header">
        <div className="box__title">
          <h1>Fotowoltaika</h1>
          <p>
            Oferowane przez nas rozwiązania umożliwią Państwu samodzielne
            pozyskiwanie energii elektrycznej z odnawialnych źródeł. Panele
            fotowoltaiczne wytworzą tyle energii elektrycznej, że wystarczy na
            pokrycie potrzeb własnych, a co za tym idzie znaczne ograniczenie
            rachunków za prąd!
          </p>
        </div>
        {/*<a id="freePick" href="http://www.freepik.com">Designed by Freepik</a>*/}
      </header>
    );
  }
}

export default Header;
