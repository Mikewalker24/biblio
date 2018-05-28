import React from 'react';

const Fave = ({ toggleFave, post, faves }) => {
  const faved = faves.includes(post);
  return (
    <button onClick={() => toggleFave(post)} className={faved ? 'faved' : ''}>
      ♥
    </button>
  );
};

export default Fave;
