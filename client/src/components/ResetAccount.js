import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetUserData, resetStockData } from "../actions/userActions";
import { Row } from "react-bootstrap";

const ResetAccount = (props) => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    stock: null,
    msg: null,
    alertOpen: false,
  };

  const [user, setUser] = useState(initialState);

  ResetAccount.propTypes = {
    resetUserData: PropTypes.func.isRequired,
    resetStockData: PropTypes.func.isRequired,
    stock: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    success: PropTypes.object,
    user: PropTypes.object,
  };

  const handleReset = () => {
    setUser(user.props.resetUserData(), user.props.resetStockData());
  };
  console.log(handleReset());

  return (
    <Row className="mt-4 mb-4 justify-content-center">
      <button
        onClick={() => {
          handleReset();
        }}
      >
        Reset Account
      </button>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  stock: state.stock,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  error: state.error,
  success: state.success,
  user: state.user,
  history: state.user.history,
  balance: state.user.balance,
});

export default connect(mapStateToProps, { resetUserData, resetStockData })(
  ResetAccount
);
