import React, { Component } from "react";
import "./Benefit.scss";
import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

class Benefit extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInUp">
        <section name="Benefit" className="container__box">
          <div className="box__article">
            <h2>Korzyści</h2>
            <p>
              Instalacja paneli fotowoltaicznych, które umożliwią nam pozyskanie
              własnej energii elektrycznej ze słońca, to oczywiście inwestycja,
              która jednak z czasem umożliwi nam osiągnięcie znacznych korzyści
              finansowych. Według przeprowadzonych przez nas wyliczeń, ale także
              według doświadczeń wielu inwestorów, związanych ze stosowaniem
              paneli słonecznych, uzyskane przez 25 lat korzystania z instalacji
              oszczędności, aż trzykrotnie przewyższą koszty inwestycji! Dzięki
              instalacjom solarnym zaczną Państwo uzyskiwać niskie rachunki za
              prąd i uniezależnią się od wzrostu cen prądu na rynku. W dokładnym
              doborze instalacji fotowoltaicznej pomogą Wam nasi specjaliści.
            </p>
            <Link
              activeClass="active"
              to="Summary"
              spy={true}
              smooth={true}
              duration={500}
            >
              Zobacz więcej korzyśći !
            </Link>
          </div>
          <div className="box__photo">
            <div className="box__photo--image benefit"></div>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}

export default Benefit;
