import React from 'react';

const Fave = ({ toggleFave, id }) => {
  return (
    <button onClick={() => toggleFave(id)}>❤</button>
  );
};

export default Fave;