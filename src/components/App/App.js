import React from "react";
import "./App.scss";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Offer from "../Offer/Offer";
import Benefit from "../Benefit/Benefit";
import Summary from "../Summary/Summary";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Installation from "../Installation/Installation";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <Offer />
      <Benefit />
      <Installation />
      <Summary />
      <Contact />
      {/*<Footer />*/}
    </>
  );
}

export default App;
