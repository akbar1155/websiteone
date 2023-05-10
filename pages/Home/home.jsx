import React from "react";
import Header from "../../src/components/Header/header";
import Nav from "../../src/components/Navbar/nav";
import Footer from "../../src/components/footer/footer";
import Headermain from "../../src/components/headermain/headermain";

const Home = () => {
  return (
    <div>
      <Nav />
      <Headermain />
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
