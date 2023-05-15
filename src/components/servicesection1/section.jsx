import React from "react";
import "./section.scss";
import ellips1 from "../../images/image/Ellipse 1951.png";
import ellips2 from "../../images/image/Ellipse 1952.png";
import ellips3 from "../../images/image/Ellipse 1953.png";
import ellips4 from "../../images/image/Ellipse 1954.png";
const Sectionend = () => {
  return (
    <div className="div1 mt-[60px] mb-[60px]">
      <div className="div1__div1">
        <h1 className="div1__div1__h1">
          To discuss your project in detail over a cup of coffee We are pleased
          to offer.{" "}
        </h1>
        <div className="div1__div1__inputs">
          <input type="text" className="input1" placeholder="Name" />
          <input type="text" className="input1" placeholder="Phone number" />
          <input
            type="text"
            className="input1"
            placeholder="Briefly about your idea (Not important)"
          />
        </div>
        <h2 className="div1__div1__h2">What services do you want to use?</h2>
        <div className="df">
          <ul className="div1__div1__ul">
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Backend</p>
            </li>

            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">CRM development</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">
                Internet magazin ishlab chiqish
              </p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Logo and Brandbook</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Portal development</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Web design</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Mobilograph</p>
            </li>
          </ul>
          <ul className="div1__div1__ul">
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Frontend</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Graphic design</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Motion design</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Mobile development</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Website development</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">SMM design</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="div1__div2__div1 mt-[-200px]  ">
        <h3 className="div1__div2__div1__h3">WHAT DO YOU LIKE?</h3>
        <ul className="div1__div2__div1__ul text-[#fff] flex pt-[40px] ">
          <li className="div1__div2__div1__ul__li">
            <img src={ellips1} alt="" />
            <p className="pl-[30px] pt-4">Bitter coffee</p>
          </li>
          <li className="div1__div2__div1__ul__li">
            <img src={ellips2} alt="" />
            <p className="pl-[40px] pt-4">Coffee with milk</p>
          </li>
          <li className="div1__div2__div1__ul__li">
            <img src={ellips3} alt="" />
            <p className="pl-[60px] pt-4">Water</p>
          </li>
          <li className="div1__div2__div1__ul__li">
            <img src={ellips4} alt="" />
            <p className="pl-[50px] pt-4">Tea</p>
          </li>
        </ul>
      </div>
      <button className="text-[18px] relative top-[900px] left-[-300px] bg-[#6911AD;] w-[200px] h-[50px] text-[#fff] rounded-lg">
        Become a customer
      </button>
    </div>
  );
};

export default Sectionend;
