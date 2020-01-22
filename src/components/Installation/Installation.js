import React, { Component } from "react";
import "./Installation.scss";
import ScrollAnimation from "react-animate-on-scroll";

class Installation extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInUp">
        <section
          name="Installation"
          className="container__box backgroundPhoto--installation"
        >
          <div className="box__article installation__text">
            <h2>Montaż</h2>

            <p>
              Zapewniamy profesjonalny montaż i doradztwo w wyborze paneli.
              Zadzwoń i umów się na wycenę.
            </p>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}

export default Installation;
