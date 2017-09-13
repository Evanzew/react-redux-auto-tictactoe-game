import React from "react";
import PropTypes from "prop-types";

const PlayerCount = ({ player1, round, player2 }) =>
  <div className="count-row">
    <div className="col-xs-4 text-center">
      <div>PLAYER</div>
      <span>
        {player1}
      </span>
    </div>
    <div className="col-xs-4 text-center">
      <div>ROUND</div>
      <span className="round">
        {round}
      </span>
    </div>
    <div className="col-xs-4 text-center">
      <div>XO BOT</div>
      <span>
        {player2}
      </span>
    </div>
  </div>;

PlayerCount.propTypes = {
  player1: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
  player2: PropTypes.number.isRequired
};
export default PlayerCount;
