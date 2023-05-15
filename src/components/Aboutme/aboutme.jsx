import React from "react";
import "./aboutme.scss";
import Vector1 from "../../images/aboutsection2/vector1";
import Vector2 from "../../images/aboutsection2/vector2";
import Vector3 from "../../images/aboutsection2/vector3";
const Aboutme = () => {
  return (
    <div className="text-center">
      <h1 className="mt-[50px] mb-12  text-white text-xl text-b">
        Our advantages
      </h1>
      <div className="inline-grid grid-cols-3 gap-4 mb-12 text-[#fff]">
        <div className="x123">
          <span className="left-[20px] relative top-[20px]">
            <Vector1 />
          </span>
          <h3 className="text[24px]">Individual approach</h3>
          <p>
            We care about each customer and their needs We create responsive
            solutions
          </p>
        </div>
        <div className="x123">
          <span className="left-[20px] relative top-[20px]">
            <Vector2 />
          </span>{" "}
          <h3>Individual approach </h3>
          <p>
            We care about each customer and their needs We create responsive
            solutions
          </p>
        </div>
        <div className="x123">
          <span className="left-[20px] relative top-[20px]">
            <Vector3 />
          </span>{" "}
          <h3>Professional service</h3>
          <p>
            We care about each customer and their needs We create responsive
            solutions
          </p>
        </div>
        <div className="x123">
          <span className="left-[20px] relative top-[20px]">
            <Vector1 />
          </span>
          <h3 className="text[24px]">Individual approach</h3>
          <p>
            We care about each customer and their needs We create responsive
            solutions
          </p>
        </div>
        <div className="x123">
          <span className="left-[20px] relative top-[20px]">
            <Vector2 />
          </span>{" "}
          <h3>Individual approach </h3>
          <p>
            We care about each customer and their needs We create responsive
            solutions
          </p>
        </div>
        <div className="x123">
          <span className="left-[20px] relative top-[20px]">
            <Vector3 />
          </span>{" "}
          <h3>Professional service</h3>
          <p>
            We care about each customer and their needs We create responsive
            solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
