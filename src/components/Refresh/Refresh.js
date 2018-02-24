import React from 'react';
import PropTypes from 'prop-types';

const Refresh = ({ gameRestart, points, move }) => (
  <div className="board-header text-center">
    <span
      onClick={() => gameRestart(move)}
      className="refresh-font col-xs-4 glyphicon glyphicon-repeat"
    />
    <span className="col-xs-4 row text-center">
      <div className="points-text">POINTS</div>
      <div className="points-points">{points}</div>
    </span>
    <div className="col-xs-4 text-center">
      <img
        className="col-xs-12 text-center game-img"
        src={require('../../assets/happyface.png')}
        alt=""
      />
    </div>
  </div>
);

Refresh.propTypes = {
  gameRestart: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
  move: PropTypes.number.isRequired
};

export default Refresh;
