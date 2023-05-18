import React from "react";
import Clock from "../../src/components/clocklive/clock";
import Footer from "../../src/components/footer/footer";
import Nav from "../../src/components/Navbar/nav";
import Sectionend from "../../src/components/servicesection1/section";

const Services = () => {
  return (
    <div>
      <Nav />
      <Sectionend />
      <Clock />
      {/* <Servicesection2 /> */}
      <Footer />
    </div>
  );
};

export default Services;
