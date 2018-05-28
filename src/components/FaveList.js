import React from 'react';

const FaveList = ({ faves, clearFaves }) => {
  return faves.length ? (
    <div className="fave-list">
      <button onClick={() => clearFaves()}>Clear Faves</button>
      <ul>{faves.map((fave, i) => <li key={i}>{fave.title.rendered}</li>)}</ul>
    </div>
  ) : null;
};

export default FaveList;
