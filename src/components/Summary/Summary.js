import React, { Component } from "react";
import "./Summary.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";

class Summary extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <section name="Summary" className="container__box greyColor">
          <div className="box__photo">
            <div className="box__photo--image benefit2"></div>
          </div>
          <div className="box__article summary">
            <h2>Podsumowując</h2>
            <span>
              <FontAwesomeIcon className="font-awesome" icon={faArrowRight} />
              <p>oszczędności trzykrotnie przewyższają inwestycję</p>
            </span>
            <span>
              <FontAwesomeIcon className="font-awesome" icon={faArrowRight} />
              <p>niskie rachunki za energię elektryczną</p>
            </span>
            <span>
              <FontAwesomeIcon className="font-awesome" icon={faArrowRight} />
              <p>uniezależnienie się od wzrostów cen prądu</p>
            </span>
            <span>
              <FontAwesomeIcon className="font-awesome" icon={faArrowRight} />
              <p>nowoczesny wygląd budynku, zwiększenie wartości inwestycji</p>
            </span>
            <span>
              <FontAwesomeIcon className="font-awesome" icon={faArrowRight} />
              <p>25 letnia żywotność instalacji</p>
            </span>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}
export default Summary;
