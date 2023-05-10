import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <h1 className="nav__img1 mt-[30px]"></h1>
        <ul className="nav__ul">
          <li className="nav__ul__li">
            <a href="/home">Home</a>
          </li>
          <li className="nav__ul__li">
            <a href="/about">About</a>
          </li>
          <li className="nav__ul__li">
            <a href="/Services">Services</a>
          </li>
          <li className="nav__ul__li">
            <a href="/portfolia">Portfolia</a>
          </li>
          <li className="nav__ul__li">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
