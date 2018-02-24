import { connect } from 'react-redux';
import Refresh from '../../components/Refresh/Refresh';
import {
  toggleGamer,
  goBackHistory,
  deleteHistory,
  nextRound
} from '../../actions/action';

let player1Count;
let round;
let player2Count;

const mapStateToProps = (state, ownProps) => {
  player1Count = state.round.player1;
  player2Count = state.round.player2;
  round = state.round.round;
  const points = player1Count * 50;
  const move = state.stepNumber;
  return { points, move };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    gameRestart: move => {
      if (move !== 0) {
        dispatch(nextRound(++round, player1Count, player2Count));
        dispatch(goBackHistory(0));
        dispatch(toggleGamer(true));
        dispatch(deleteHistory(0));
      }
    }
  };
};

const RefreshGame = connect(mapStateToProps, mapDispatchToProps)(Refresh);
export default RefreshGame;
