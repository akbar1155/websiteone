import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="header mt-[60px] mb-[60px]">
      <h1 className="header__h1 mt-[40px] mb-[30px]">
        To become a good programmer, it is recommended to do the following
        things will:
      </h1>
      <ul className="header__ul">
        <li className="header__ul__li1 hover:bg-">
          <p className="header__ul__li1__img1"></p>
          <p className="header__ul__li1__p1">
            Write more code: A big part of programming is writing code consists
            of Therefore, write more code, analyze it and it you need to develop
            good organizational skills.{" "}
          </p>
        </li>
        <li className="header__ul__li2">
          <p className="header__ul__li2__img1"></p>
          <p className="header__ul__li2__p1">
            More hands-on: Practical as well as coding exercise is also very
            important. It is mastered and mastered helps to develop the ability
            by testing the code.{" "}
          </p>
        </li>
        <li className="header__ul__li3">
          <p className="header__ul__li3__img1"></p>
          <p className="header__ul__li3__p1">
            Follow the news: It is very important to follow the news in software
            development important because programmers are constantly new they
            need to use technologies and programming languages.{" "}
          </p>
        </li>
      </ul>
      <ul className="header__ul mt-[30px]">
        <li className="header__ul__li4">
          <p className="header__ul__li4__img1"></p>
          <p className="header__ul__li4__p1">
            Learn to solve problems: In programming, problems to help solve and
            realize important goals learned algorithms should be used.{" "}
          </p>
        </li>
        <li className="header__ul__li5">
          <p className="header__ul__li5__img1"></p>
          <p className="header__ul__li5__p1">
            Teamwork: Developers spend most of their time alone but teamwork is
            very important. This is for the team approach, another slash is very
            important. This is a team approach.{" "}
          </p>
        </li>
        <li className="header__ul__li6">
          <p className="header__ul__li6__img1"> </p>

          <p className="header__ul__li5__p1">
            Read and learn: The best programming software to read and is
            learning. Read and learn, follow technological innovations and help
            you understand important products.{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
