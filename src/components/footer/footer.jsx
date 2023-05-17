import React from "react";
import "./footer.scss";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineYoutube, AiOutlineMail } from "react-icons/ai";
import { ImGithub } from "react-icons/im";
import { RiBusFill } from "react-icons/ri";
import Massage from "../Massage/massage";

const Footer = () => {
  return (
    <div className="footer pt-[40px] pb-[10px]  ">
      <div className="footer__div1">
        <ul className="footer__div1__ul1">
          <li className="footer__div1__ul1__li1"></li>
          <li className="footer__div1__ul1__li2">
            <a href="#">Menu</a>
          </li>
          <li className="footer__div1__ul1__li2">
            <a href="/home">Home</a>
          </li>
          <li className="footer__div1__ul1__li2">
            <a href="/about">About</a>
          </li>
          <li className="footer__div1__ul1__li2">
            <a href="/Services">Services</a>
          </li>
          <li className="footer__div1__ul1__li2">
            <a href="/portfolia">Portfolia</a>
          </li>
          <li className="footer__div1__ul1__li2">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <ul className="footer__div1__ul2">
          <li className="footer__div1__ul2__li1">
            <a
              className="footer__div1__ul2__li1__a relative top-[22px]"
              href="https://www.google.com/maps/@41.3406116,69.2872104,16z?hl=ru-KG"
            >
              <GoLocation />
            </a>
            <p className="footer__div1__ul2__li1__p">
              Tashkent city, Yunusabad district, 7 Bogishamol street{" "}
            </p>
          </li>

          <li className="mt-[30px] ">
            <div className="footer__div1__ul2__li2__div1 flex">
              <a
                className="
                text-[20px]
                 relative right-[-75px]
                 top-[6px]"
                href="https://tashtrans.uz/avtobusnye-marshruty-
                                 tashkenta/"
              >
                <RiBusFill />
              </a>
              <p className="footer__div1__ul2__li2__div1__p relative top-1">
                19, 50, 63, 115 / Bodomzor station
              </p>
            </div>
            <div className="text-[#fff] p-[30px]">
              <a
                href="tel:998932931155"
                className="footer__div1__ul2__li2__div2__a1 relative top-5 left-12"
              >
                <BsTelephone />
              </a>
              <a
                href="tel:998932931155"
                className="footer__div1__ul2__li2__div2__a2 ml-4"
              >
                +998 93 293 11 55
              </a>
              <br />
              <a
                href="tel:998913575391"
                className="footer__div1__ul2__li2__div2__a3"
              >
                +998 91 357 53 91
              </a>
            </div>
          </li>
        </ul>
        <Massage />
      </div>

      <hr />

      <div className=" flex justify-center items-center text-[25px] mr-[5px] text-[aliceblue] gap-x-[50px]">
        <a href="https://t.me/Akbar_1155">
          <TbBrandTelegram />
        </a>
        <a href="https://www.instagram.com/akbar.11.55/">
          <BsInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086628349691">
          <FiFacebook />
        </a>
        <a href="https://twitter.com/Akbar9040471781">
          <FiTwitter />
        </a>
        <a
          href="https://www.youtube.com/channel/UCloKDgHj4JANTC2fd8liAew"
          className="text-[30px]"
        >
          <AiOutlineYoutube />
        </a>
        <a href="https://github.com/akbar1155">
          <ImGithub />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <AiOutlineMail />
        </a>
      </div>
      <hr />
      <small className="text-[#fff] text-[12px]">
        <b>Copyright © 2023 Uzbekistan Tashkent Yunusabad</b>
      </small>
    </div>
  );
};

export default Footer;
