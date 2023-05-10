import React from "react";
import Nav from "../../src/components/Navbar/nav";
import Footer from "../../src/components/footer/footer";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="flex  pt-[120px] justify-between">
        <div className="text-[#fff] w-[900px]">
          <h1 className="text-[30px] ">Kompaniya haqida</h1>
          Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va innovatsion
          echimlarni taqdim etish maqsadida tashkil etilgan veb-agentlik.
          Bizning jamoamiz mijozlarga moslashtirilgan va sifatli mahsulotni
          taklif qilish uchun yaqin hamkorlikda ishlaydigan tajribali
          veb-dizayn, ishlab chiqish va marketing mutaxassislaridan iborat.
          <br />
          <br />
          Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish, SEO
          optimallashtirish, kontent yaratish va reklama kampaniyalarini o'z
          ichiga olgan keng ko'lamli xizmatlarni taklif etamiz. Biz eng yangi
          texnologiyalar va innovatsion usullardan foydalangan holda brendni
          rivojlantirish va sotishni ko'paytirish bilan shug'ullanamiz.
        </div>
        <div className="text-[#fff] flex flex-wrap">
          <div>
            <div className="w-[200px]">
              <span>20+</span>
              <p>Ishga tushirilgan loyihalar</p>
            </div>
            <div className="w-[200px]">
              <span>4 yil</span>
              <p>Rivojlanish tajribasi</p>
            </div>
          </div>
          <div>
            <div className="w-[200px]">
              <span>12+</span>
              <p>Mutaxassislar</p>
            </div>
            <div className="w-[200px]">
              <span>4 yil</span>
              <p>Rivojlanish tajribasi</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
