import calculateWinner from '../../normal';
import calculatAlmost from '../../computerStep';
import { connect } from 'react-redux';
import {
  addHistory,
  goBackHistory,
  toggleGamer,
  gameIsOver,
  nextRound
} from '../../actions/action';
import RenderSquare from '../../components/RenderSquare/RenderSquare';

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
      squares[i] = `X`;
      dispatch(addHistory(squares));
      dispatch(goBackHistory(history.length));
      dispatch(toggleGamer(!currentNext));

      if (calculateWinner(squares)) {
        let successList = calculateWinner(squares);

        player1Count++;
        dispatch(nextRound(round, player1Count, player2Count));
        dispatch(gameIsOver(true));
        for (let j = 0; j < successList.length; j++) {
          document.getElementsByClassName('square')[successList[j]].className +=
            ' game-success';
        }
        return;
      } else {
        let list = document.getElementsByClassName('game-success');
        if (list.length !== 0) {
          for (let k = 0; k < list.length; k++) {
            list[k].className = 'square';
          }
        }
      }
      if (history.length === 9) {
        return;
      }
      const nextNum = calculatAlmost(squares);
      squares[nextNum] = 'O';
      dispatch(addHistory(squares));
      dispatch(goBackHistory(history.length + 1));
      dispatch(toggleGamer(currentNext));

      if (calculateWinner(squares)) {
        let successList = calculateWinner(squares);

        player2Count++;
        dispatch(nextRound(round, player1Count, player2Count));
        dispatch(gameIsOver(true));
        for (let j = 0; j < successList.length; j++) {
          document.getElementsByClassName('square')[successList[j]].className +=
            ' game-success';
        }
        return;
      } else {
        let list = document.getElementsByClassName('game-success');
        if (list.length !== 0) {
          for (let k = 0; k < list.length; k++) {
            list[k].className = 'square';
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
