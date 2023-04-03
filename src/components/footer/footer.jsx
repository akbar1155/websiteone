import React from 'react';
import "./footer.scss"
import { BsInstagram, BsTelephone } from 'react-icons/bs';
import { TbBrandTelegram } from 'react-icons/tb';
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineYoutube, AiOutlineMail } from "react-icons/ai";
import { ImGithub } from "react-icons/im";
import { BiBus } from "react-icons/bi";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__div1'>


                <ul className='footer__div1__ul1'>
                    <li className='footer__div1__ul1__li1'></li>
                    <li className='footer__div1__ul1__li2'> <a href="#">Menyu</a></li>
                    <li className='footer__div1__ul1__li3'><a href="#">Home</a></li>
                    <li className='footer__div1__ul1__li4'><a href="#">About</a></li>
                    <li className='footer__div1__ul1__li5'><a href="#">Services</a></li>
                    <li className='footer__div1__ul1__li6'><a href="#">Portfolia</a></li>
                    <li className='footer__div1__ul1__li7'><a href="#">Contact</a></li>

                </ul>
                <ul className='footer__ul2'>

                    <li><GoLocation /><p>Toshkent shahri,
                        Bog`ishamol ko`chasi, 17</p></li>
                    <li>
                        <li><BiBus /><p>19, 50, 63, 115 / Bodomzor bekati</p></li>

                        <BsTelephone />
                        <a href="tel:998932931155">+998 93 293 11 55</a>
                        <br />
                        <a href="tel:998913575391">+998 91 357 53 91</a>
                    </li>
                    <li></li>
                </ul>
            </div>

            <hr />

            <div className='footer__url'>
                <a href="https://t.me/Akbar_1155"><TbBrandTelegram /></a>
                <a href="https://www.instagram.com/akbar.11.55/"><BsInstagram /></a>
                <a href="https://www.facebook.com/profile.php?id=100086628349691"><FiFacebook /></a>
                <a href="https://twitter.com/Akbar9040471781"><FiTwitter /></a>
                <a href="https://www.youtube.com/channel/UCloKDgHj4JANTC2fd8liAew"><AiOutlineYoutube /></a>
                <a href="https://github.com/akbar1155"><ImGithub /></a>
                <a href="https://mail.google.com/mail/u/0/#inbox"><AiOutlineMail /></a>
            </div>
            <hr />
            <small className='footer__small'>
                <b className='footer__small__b'>Copyright © 2023 Uzbekistan Tashkent Yunusabad</b>
            </small>
        </div>
    );
}

export default Footer;
