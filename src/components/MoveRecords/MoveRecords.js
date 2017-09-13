import React from "react";
import PropTypes from "prop-types";
import MoveList from "../../containers/MoveList/MoveList";

const MoveRecords = ({ stepNumber }) => {
  var records = [];
  for (var i = 0; i < stepNumber + 1; i++) {
    records.push(<MoveList key={i} move={i} />);
  }
  return (
    <div>
      {records}
    </div>
  );
};

MoveRecords.propTypes = {
  stepNumber: PropTypes.number.isRequired
};
export default MoveRecords;
