import React from "react";
import FillRenderSquare from "../../containers/FillRenderSquare/FillRenderSquare";

const Board = () => {
  var rows = [];
  for (var i = 0; i < 3; i++) {
    var row = [];
    for (var j = 3 * i; j < 3 * i + 3; j++) {
      row.push(<FillRenderSquare i={j} key={j} />);
    }
    rows.push(
      <div className="board-row" key={i}>
        {row}
      </div>
    );
  }
  return (
    <div>
      {rows}
    </div>
  );
};

export default Board;
