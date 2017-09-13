import React from "react";
import PropTypes from "prop-types";
import Square from "../Square/Square";

const RenderSquare = ({ i, squares, onGameClick }) =>
  <Square value={squares[i]} onClick={() => onGameClick(i)} />;

RenderSquare.propTypes = {
  onGameClick: PropTypes.func.isRequired,
  squares: PropTypes.array.isRequired,
  i: PropTypes.number.isRequired
};

export default RenderSquare;
