import React, { Component } from "react";
import "./Offer.scss";
import ScrollAnimation from "react-animate-on-scroll";

class Offer extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInUp">
        <section name="Offer" className="container__box backgroundPhoto">
          <div className="box__article offer__text">
            <h2>Dlaczego warto?</h2>
            <div className="offer__text__column">
              <p>
                Stosowane w gospodarstwach domowych instalacje fotowoltaiczne
                pozwalają na bilansowanie energii słonecznej. Rozliczanie
                energii jest dokonywane co 12 miesięcy. W okresie dużego
                nasłonecznienia zużywamy energię na własne potrzeby, natomiast
                nadmiar oddajemy do sieci energetycznej, natomiast w okresie
                zimowym korzystamy ze zbilansowanych w sieci rezerw. Do 10 kWp
                energia jest bilansowana w stosunku 1:0,8, natomiast od 10kWp do
                50 kWp w stosunku 1:0,7.
              </p>
              <p>
                Każdy z nas potrzebuje wolności i swobody. Domowa elektrownia
                słoneczna zapewnia całkowitą niezależność energetyczną – nikt
                nie pozbawi Ci dostępu do promieni słonecznych, dzięki której
                zawsze będziesz miał dostęp do prądu. Własna instalacja
                fotowoltaiczna pozwala na energetyczną autonomię. Jesteś
                producentem własnej energii. Gospodarstwo domowe zaopatrzone w
                system paneli fotowoltaicznych jest w pełni samowystarczalne i
                niewrażliwe na żadne podwyżki cen energii elektrycznej. Nasze
                rozwiązania w takich kwestiach, jak energia fotowoltaiczna,
                stanowią realne odciążenie Twojego budżetu domowego na długie
                lata.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}

export default Offer;
