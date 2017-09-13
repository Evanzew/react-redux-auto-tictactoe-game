import { connect } from "react-redux";
import Moves from "../../components/Moves/Moves";
import {
  toggleGamer,
  goBackHistory,
  deleteHistory
} from "../../actions/action";

const mapStateToProps = (state, ownProps) => {
  const desc = ownProps.move ? "Move #" + ownProps.move : "Game start";
  return { desc };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    jumpTo: move => {
      const xIsNext = move % 2 ? false : true;
      dispatch(goBackHistory(move));
      dispatch(toggleGamer(xIsNext));
      dispatch(deleteHistory(move));
    }
  };
};
const MoveList = connect(mapStateToProps, mapDispatchToProps)(Moves);
export default MoveList;
