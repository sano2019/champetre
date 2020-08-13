import React from 'react';
import PropTypes from 'prop-types';

const HomeText = (props) => {
  return (
    <div className='hometext'>
      <h4>{props.topnote}</h4>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

HomeText.propTypes = {
  topnote: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default HomeText;
