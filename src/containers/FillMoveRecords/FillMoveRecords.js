import { connect } from "react-redux";
import MoveRecords from "../../components/MoveRecords/MoveRecords";

const mapStateToProps = (state, ownProps) => {
  let stepNumber;
  stepNumber = state.stepNumber;
  return { stepNumber };
};

const FillMoveRecords = connect(mapStateToProps)(MoveRecords);

export default FillMoveRecords;
