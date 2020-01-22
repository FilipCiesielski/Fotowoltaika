import React, { Component } from "react";
import "./AboutUs.scss";
import ScrollAnimation from "react-animate-on-scroll";

class AboutUs extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInUp">
        <section name="AboutUs" className="container__box">
          <div className="box__article">
            <h2>O nas</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              est aliquam, rutrum nisi non, varius libero. Proin eget mollis
              tortor. Sed et malesuada arcu.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              est aliquam, rutrum nisi non, varius libero. Proin eget mollis
              tortor. Sed et malesuada arcu. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut quis est aliquam, rutrum nisi non,
              varius libero. Proin eget mollis tortor. Sed et malesuada arcu.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              est aliquam, rutrum nisi non, varius libero. Proin eget mollis
              tortor. Sed et malesuada arcu.
            </p>
          </div>

          <div className="box__photo">
            <div className="box__photo--image aboutUs"></div>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}

export default AboutUs;
