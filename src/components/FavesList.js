import React from 'react';
import PropTypes from 'prop-types';

const FavesList = ({ faves, clearFaves }) => {
  return faves.length ? (
    <div className="fave-list">
      <button onClick={() => clearFaves()}>Clear Faves</button>
      <ul>
        {faves.map((fave, i) => <li key={fave.id}>{fave.title.rendered}</li>)}
      </ul>
    </div>
  ) : null;
};

FavesList.propTypes = {
  faves: PropTypes.arrayOf(PropTypes.object).isRequired,
  clearFaves: PropTypes.func.isRequired,
};

export default FavesList;
