import React from "react";
import PropTypes from "prop-types";

const Status = ({ status }) =>
  <div>
    {status}
  </div>;

Status.propTypes = {
  status: PropTypes.string.isRequired
};

export default Status;
