import React from 'react';
import PropTypes from 'prop-types';

const Parallax = (props) => {
  return (
    <div
      className='parallax'
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    ></div>
  );
};

Parallax.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Parallax;
