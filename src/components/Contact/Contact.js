import React, { Component } from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import ScrollAnimation from "react-animate-on-scroll";

class Contact extends Component {
  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={17}
          defaultCenter={{ lat: 52.4232, lng: 16.91 }}
        >
          {props.isMarkerShown && (
            <Marker
              position={{ lat: 52.4232, lng: 16.91 }}
              icon={{
                url:
                  "https://www.laco.eu/wp-content/themes/laco/assets/img/icons/google-maps-icons/icon-map-marker.svg",
                scaledSize: new window.google.maps.Size(25, 25)
              }}
            />
          )}
        </GoogleMap>
      ))
    );
    let googleURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key`;
    return (
      <ScrollAnimation animateIn="fadeInUp">
        <section name="Contact" className="container__box backgroundContact">
          <div className="box__article contact">
            <h2>Kontakt</h2>
            <p>
              <FontAwesomeIcon className="font-awesome" icon={faMapMarkerAlt} />
            </p>

            <p>
              <FontAwesomeIcon className="font-awesome" icon={faMobileAlt} />
              537-731-143
            </p>
            <p>
              <FontAwesomeIcon className="font-awesome" icon={faEnvelope} />
              borbud@onet.eu
            </p>
          </div>

          <div className="box__contact">
            <div className="google__maps">
              <MyMapComponent
                isMarkerShown
                googleMapURL={googleURL}
                loadingElement={<div />}
                containerElement={<div />}
                mapElement={<div />}
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}

export default Contact;
