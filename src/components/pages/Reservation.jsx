import React from 'react';
import MyFancyComponent from '../map/MyMap';
import Parallax from '../layout/Parallax';

const Reservation = () => {
  return (
    <div>
      <Parallax image='https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' />
      <div className='top-text'>
        <h2>Réservation</h2>
      </div>
      <div className='reservation-flex'>
        <iframe
          title='thefork'
          class='thefork'
          src='https://module.lafourchette.com/en_GB/module/576335-25dc1'
        ></iframe>
        <MyFancyComponent />
      </div>
      <div className='top-text' ç>
        <h2>Lieu et horaires</h2>
        <p>75015 Paris, France</p>
        <p>Ouvert du lundi au dimanche</p>
        <p>Déjeuner : 12 h - 14 h 30</p>
        <p>Diner : 18 h - 23 h</p>
      </div>
    </div>
  );
};

export default Reservation;
