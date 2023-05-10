import React from "react";
import "./header.scss";
// impo

const Header = () => {
  return (
    <div className="header mt-[60px] mb-[60px]">
      <h1 className="header__h1 mt-[40px] mb-[30px]">
        Yaxshi dasturchi bo'lish uchun quyidagi narsalarni qilish tavsiya
        etiladi:
      </h1>
      <ul className="header__ul">
        <li className="header__ul__li1 hover:bg-">
          <p className="header__ul__li1__img1"></p>
          <p className="header__ul__li1__p1">
            Ko'proq kod yozing: Dasturchilikning yirik qismi kod yozishdan
            iboratdir. Bu sababli, ko'proq kod yozib, uni tahlil qilish va uni
            yaxshi tashkil etish bo'yicha qobiliyatni rivojlantirishingiz kerak.
          </p>
        </li>
        <li className="header__ul__li2">
          <p className="header__ul__li2__img1"></p>
          <p className="header__ul__li2__p1">
            Ko'proq amaliy mashg'ulot: Kod yozish bilan bir qatorda amaliy
            mashg'ulot ham juda muhimdir. Bu, o'zlashtirish va o'zlashtirilgan
            kodni test qilish orqali qobiliyatni rivojlantirishga yordam beradi.
          </p>
        </li>
        <li className="header__ul__li3">
          <p className="header__ul__li3__img1"></p>
          <p className="header__ul__li3__p1">
            Yangiliklarni kuzating: Dasturchilikda yangiliklarni kuzatish juda
            muhimdir, chunki dasturchilar doimiy ravishda yangi
            texnologiyalardan va dasturlash tillaridan foydalanishlari kerak.
          </p>
        </li>
      </ul>
      <ul className="header__ul mt-[30px]">
        <li className="header__ul__li4">
          <p className="header__ul__li4__img1"></p>
          <p className="header__ul__li4__p1">
            Problemlarni yechishni o'rganing: Dasturchilikda, muammolarni
            yechish va muhim maqsadlarni amalga oshirishga yordam berish uchun
            o'rganilgan algoritmalardan foydalanish kerak.
          </p>
        </li>
        <li className="header__ul__li5">
          <p className="header__ul__li5__img1"></p>
          <p className="header__ul__li5__p1">
            Jamoa bilan ishlash: Dasturchilar ko'p vaqt o'zlarini yagona holatda
            o'tkazishadi, lekin jamoa bilan ishlash juda muhimdir. Bu, jamoaga
            yondash, boshqa shlash juda muhimdir. Bu, jamoaga yondash.{" "}
          </p>
        </li>
        <li className="header__ul__li6">
          <p className="header__ul__li6__img1"> </p>

          <p className="header__ul__li5__p1">
            O'qish va o'rganish: Dasturchilikning eng yaxshi dasturi o'qish va
            o'rganishdir. O'qish va o'rganish, texnologik yangiliklarni kuzatish
            va muhim mahsulotlarni tushunishga yordam beradi.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
