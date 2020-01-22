import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <section className="container__box greyColor footer">
        <div className="box__footer">
          <div className="box__photo--image footer--logo"></div>
        </div>
        <div className="box__article"></div>
      </section>
    );
  }
}

export default Footer;
