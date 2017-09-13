import { connect } from "react-redux";
import PlayerCount from "../../components/PlayerCount/PlayerCount";

const mapStateToProps = (state, ownProps) => {
  const player1 = state.round.player1;
  const round = state.round.round;
  const player2 = state.round.player2;
  return { player1, round, player2 };
};

const FillPlayerCount = connect(mapStateToProps)(PlayerCount);

export default FillPlayerCount;
