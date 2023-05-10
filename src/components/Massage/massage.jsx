import React from "react";
import "./massage.scss";
const Massage = () => {
  // const elh3name = document.querySelector(".h3name");
  // const elflex = document.querySelector(".flex");
  // const elh4maasage = document.querySelector(".h4maasage");
  // // const elh3name=document.querySelector(".h3name")
  // const elh4youremail = document.querySelector(".h4youremail");

  // const elinput1 = document.querySelector(
  //   ".footer__div1__ul3__li__div__input1"
  // );
  // const elinput2 = document.querySelector(
  //   ".footer__div1__ul3__li__div__input2"
  // );
  // // const valuename = elinput1.value;
  // const elinput3 = document.querySelector(".footer__div1__ul3__li__input");
  // elflex.addEventListener("click", myfuc);
  // function myfuc() {
  //   elinput1.value.innerHTML = elinput1.values;
  // }
  return (
    <div>
      <ul className="footer__div1__ul3">
        <h3 className="footer__div1__ul3__h3 pt-[20px] pb-5">Contact Us</h3>
        <li className="footer__div1__ul3__li">
          <div className="footer__div1__ul3__li__div">
            <input
              type="text"
              placeholder="Your name*"
              className="footer__div1__ul3__li__div__input1 text"
            />
            <br />
            <input
              type="text"
              placeholder="Your Mail*"
              className="footer__div1__ul3__li__div__input2"
            />
          </div>
          <input
            type="text"
            placeholder="Your Massage*"
            className="footer__div1__ul3__li__input"
          />
        </li>
        <button className="footer__div1__ul3__btn">Send Massage</button>
      </ul>
    </div>
  );
};

export default Massage;
