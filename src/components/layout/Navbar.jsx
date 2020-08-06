import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='navbar'>
      <p>107 rue Saint Charles 75015 Paris, France</p>
      <a
        href='https://www.instagram.com/champetre_bbq_coreen/'
        className='navsocial'
      >
        <FaInstagram />
      </a>
      <h1>Champetre BBQ King</h1>
      <hr></hr>
      <div className='navlinks'>
        <ul>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/Menu'>Menu</Link>
          </li>
          <li>
            <Link to='/Reservation'>Reservation</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
