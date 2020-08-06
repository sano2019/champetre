import React from 'react';
import Iframe from 'react-iframe';

const Reservation = () => {
  return (
    <div>
      <h1>This is the reservation page</h1>
      <Iframe
        url='https://module.lafourchette.com/fr_FR/module/576335-25dc1'
        width='100%'
        height='800px'
        position='relative'
        display='flex'
        color='black'
      ></Iframe>
    </div>
  );
};

export default Reservation;
