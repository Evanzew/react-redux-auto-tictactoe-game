import calculateWinner from "../../normal";
import { connect } from "react-redux";
import {
  addHistory,
  goBackHistory,
  toggleGamer,
  gameIsOver,
  nextRound
} from "../../actions/action";
import RenderSquare from "../../components/RenderSquare/RenderSquare";

let historyALl;
let currentSquares;
let currentNext;
let player1Count;
let round;
let player2Count;

const mapStateToProps = (state, ownProps) => {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  player1Count = state.round.player1;
  player2Count = state.round.player2;
  round = state.round.round;

  historyALl = history;
  currentSquares = squares;
  currentNext = state.xIsNext;
  return { squares };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGameClick: i => {
      const history = historyALl;
      const squares = currentSquares;
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = currentNext ? `X` : "O";
      dispatch(addHistory(squares));
      dispatch(goBackHistory(history.length));
      dispatch(toggleGamer(!currentNext));

      if (calculateWinner(squares)) {
        let successList = calculateWinner(squares);

        currentNext ? player2Count++ : player1Count++;
        dispatch(nextRound(round, player1Count, player2Count));
        dispatch(gameIsOver(true));
        for (var j = 0; j < successList.length; j++)
          document.getElementsByClassName("square")[successList[j]].className +=
            " game-success";
      } else {
        var list = document.getElementsByClassName("game-success");
        if (list.length !== 0) {
          for (var k = 0; k < list.length; k++) {
            list[k].className = "square";
          }
        }
      }
    }
  };
};

const FillRenderSquare = connect(mapStateToProps, mapDispatchToProps)(
  RenderSquare
);

export default FillRenderSquare;
