import { connect } from "react-redux";
import Status from "../../components/Status/Status";
const mapStateToProps = (state, ownProps) => {
  const gameOver = state.gameOver;
  const xIsNext = state.xIsNext;
  let status;
  if (gameOver) {
    status = "Game over! Winner is: " + (xIsNext ? "Player2" : "Player1");
  } else {
    status = "Next player: " + (xIsNext ? "Player1" : "Player2");
  }
  return { status };
};

const ViewStatus = connect(mapStateToProps)(Status);
export default ViewStatus;
