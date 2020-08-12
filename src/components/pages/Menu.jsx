import React from 'react';
import MenuItem from '../menu/MenuItem';
import { Entrees, MainCourses, Deserts } from '../menu/MenuList';
import { FaSeedling, FaPepperHot } from 'react-icons/fa';
import { GiGrain, GiFruitTree, GiHighGrass } from 'react-icons/gi';

const Menu = () => {
  return (
    <div>
      <div className='menu-list'>
        <div className='menu-intro'>
          <h2>Menu</h2>
          <h4>
            Mettez vos clients en appétit. Décrivez en quelques mots votre menu
            ici.
          </h4>
        </div>
        <h2>ENTRÉES</h2>
        <div className='courses'>
          <hr></hr>
          {Entrees.map((item) => (
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
              allergens={item.allergens}
            />
          ))}
        </div>
        <h2>Plats</h2>
        <div className='courses'>
          <hr></hr>
          {MainCourses.map((item) => (
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
              allergens={item.allergens}
            />
          ))}
        </div>
        {Deserts.length > 0 && <h2>Desert</h2>}
        <div className='courses'>
          <hr></hr>
          {Deserts.map((item) => (
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
              allergens={item.allergens}
            />
          ))}
        </div>
        <div className='allergen-legend'>
          <div className='leg-detail'>
            <FaSeedling /> <p>Organic</p>
          </div>
          <div className='leg-detail'>
            <FaPepperHot /> <p>Spicy</p>
          </div>
          <div className='leg-detail'>
            <GiFruitTree /> <p>Vegetarian</p>
          </div>
          <div className='leg-detail'>
            <GiGrain /> <p>Gluten Free</p>
          </div>
          <div className='leg-detail'>
            <GiHighGrass /> <p>Vegan</p>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Menu;
