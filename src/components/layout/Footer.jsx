import React from 'react';
import { FaInstagram, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socials'>
        <a href='https://www.instagram.com/champetre_bbq_coreen/'>
          <FaInstagram className='socials' />
        </a>
        <a href='https://www.tripadvisor.com/Restaurant_Review-g187147-d19388605-Reviews-BBQ_Champetre_Coreen-Paris_Ile_de_France.html#'>
          <FaTripadvisor className='socials' />
        </a>
      </div>
      <p className='copyright'>
        <strong>© 2020 par CHAMPETRE BBQ KING</strong>
      </p>
    </div>
  );
};

export default Footer;
