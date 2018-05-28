import React from 'react';
import PropTypes from 'prop-types';

const Fave = ({ toggleFave, post, faves }) => {
  const faved = faves.includes(post);
  return (
    <button onClick={() => toggleFave(post)} className={faved ? 'faved' : ''}>
      ♥
    </button>
  );
};

Fave.propTypes = {
  faves: PropTypes.arrayOf(PropTypes.object).isRequired,
  post: PropTypes.object.isRequired,
  toggleFave: PropTypes.func.isRequired,
};

export default Fave;
