import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h1>This is the Navbar</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Menu'>Menu</Link>
        </li>
        <li>
          <Link to='/Reservation'>Reservation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
