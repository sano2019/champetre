import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='address-container'>
        <div className='address'>
          <p>107 rue Saint Charles</p>
          <p>75015 Paris, France</p>
        </div>
        <a
          href='https://www.instagram.com/champetre_bbq_coreen/'
          className='navsocial'
        >
          <FaInstagram />
        </a>
      </div>
      <h1>Champetre BBQ King</h1>
      <div className='navlinks'>
        <hr></hr>
        <ul>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/Menu'>Menu</Link>
          </li>
          <li>
            <Link to='/Reservation'>Réservation</Link>
          </li>
        </ul>
        <hr></hr>
      </div>
    </div>
  );
};

export default Navbar;
