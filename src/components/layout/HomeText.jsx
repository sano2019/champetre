import React from 'react';

const HomeText = (props) => {
  return (
    <div className='hometext'>
      <h4>{props.topnote}</h4>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default HomeText;
