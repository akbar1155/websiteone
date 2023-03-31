import React from 'react';
import "./nav.scss"
const Nav = () => {
    return (

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
    );
}

export default Nav;
