import React from 'react';
import { FaSeedling, FaPepperHot } from 'react-icons/fa';
import { GiGrain, GiFruitTree, GiHighGrass } from 'react-icons/gi';

const getIcon = (el) => {
  switch (el) {
    case 'o':
      return <FaSeedling className='icon' />;
    case 's':
      return <FaPepperHot className='icon' />;
    case 'gf':
      return <GiGrain className='icon' />;
    case 'vg':
      return <GiFruitTree className='icon' />;
    case 'v':
      return <GiHighGrass className='icon' />;
    default:
      return null;
  }
};

const MenuItem = (props) => {
  return (
    <div className='menu-card'>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <h4>{props.price}</h4>
      <p className='allergens'>{props.allergens.map((a) => getIcon(a))}</p>
    </div>
  );
};

export default MenuItem;
