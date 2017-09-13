import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Moves = ({ move, jumpTo, desc }) => (
  <div>
    <li key={move}>
      <a
        onClick={e => {
          e.preventDefault();
          jumpTo(move);
        }}
      >
        {desc}
      </a>
    </li>
    <div>
      <Link to="/">game</Link>
    </div>
  </div>
);

Moves.propTypes = {
  move: PropTypes.number.isRequired,
  jumpTo: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired
};
export default Moves;
