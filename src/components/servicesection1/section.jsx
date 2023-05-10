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
          Sizni bir finjon qahva ustida loyihangizni batafsil muhokama qilishga
          mamnuniyat ila taklif qilamiz.
        </h1>
        <div className="div1__div1__inputs">
          <input type="text" className="input1" placeholder="Ismingiz" />
          <input
            type="text"
            className="input1"
            placeholder="Telefon raqamingiz"
          />
          <input
            type="text"
            className="input1"
            placeholder="Goyangiz xaqida qisqacha (Muhim emas)"
          />
        </div>
        <h2 className="div1__div1__h2">
          Qanday xizmatlardan foydalanishni xoxlaysiz?
        </h2>
        <div className="df">
          <ul className="div1__div1__ul">
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Backend</p>
            </li>

            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">CRM ishlab chiqish</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">
                Internet magazin ishlab chiqish
              </p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Logotip va Brandbook</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Portal ishlab chiqish</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Veb dizayn</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Mobilograf</p>
            </li>
          </ul>
          <ul className="div1__div1__ul">
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Frontend</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Grafik dizayn</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Motion dizayn</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">
                Mobililova ishlab chiqish
              </p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">Veb sayt ishlab chiqish</p>
            </li>
            <li className="div1__div1__ul__li">
              <input type="checkbox" className="div1__div1__ul__li__input1" />
              <p className="div1__div1__ul__li__p1">SMM dizayn</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="div1__div2__div1 mt-[-200px]  ">
        <h3 className="div1__div2__div1__h3">NIMANI MA'QUL KO'RASIZ?</h3>
        <ul className="div1__div2__div1__ul text-[#fff] flex pt-[40px] ">
          <li className="div1__div2__div1__ul__li">
            <img src={ellips1} alt="" />
            <p className="pl-[30px] pt-4">Achchiq kofe</p>
          </li>
          <li className="div1__div2__div1__ul__li">
            <img src={ellips2} alt="" />
            <p className="pl-[40px] pt-4">Sutli kofe</p>
          </li>
          <li className="div1__div2__div1__ul__li">
            <img src={ellips3} alt="" />
            <p className="pl-[60px] pt-4">Suv</p>
          </li>
          <li className="div1__div2__div1__ul__li">
            <img src={ellips4} alt="" />
            <p className="pl-[50px] pt-4">Choy</p>
          </li>
        </ul>
      </div>
      <button className="text-[18px] relative top-[900px] left-[-300px] bg-[#6911AD;] w-[200px] h-[50px] text-[#fff] rounded-lg">
        Mijoz bo’lish
      </button>
    </div>
  );
};

export default Sectionend;
