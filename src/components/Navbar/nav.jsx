import React from 'react';
import "./nav.scss"
const Nav = () => {
    return (
        <>
            <div className='nav'>
                <h1 className='nav__img1'></h1>
                <ul className='nav__ul'>
                    <li className='nav__ul__li'><a href="#">Home</a></li>
                    <li className='nav__ul__li'><a href="#">About</a></li>
                    <li className='nav__ul__li'><a href="#">Services</a></li>
                    <li className='nav__ul__li'><a href="#">Portfolia</a></li>
                    <li className='nav__ul__li'><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className='main'>
                <p className='main__p1'>Dasturlash dasturchidan tahliliy zehnga ega bo'lishni talab qiladi. Aks holda, har qanday muammoga yechim toppish mushkul bo'ladi. Dasturlashda barcha kodlar mantiqiy ravishda ketma-ketlikda tuzilgan bo’ladi va bu mantiqni yo'qotib bo'lmaydi. Aks holda, biror narsa o’xshamaydi va xato yoki undan ham yomonroq narsani qidirishda koddan kodga o'tib yurishga to'g'ri keladi. Tahliliy fikrlashda davom etish kerak va har yerda, ayniqsa dasturlashda, rioya qilish kerak bo'lgan mantiq borligini unutmaslik kerak.Boshqa har qanday ishda bo'lgani kabi, dasturlashda, diqqatlilik va biron bir vazifaga yoki biror bir elementga e'tiborli bo’lish qobiliyati juda muhim ko'nikma xisoblanadi. Yuzlab, va hatto minglab qatorli kodlar - dasturchi ko'pincha duch keladigan jarayon. </p>
                <p className='main__img'></p>
            </div>
        </>
    );
}

export default Nav;
