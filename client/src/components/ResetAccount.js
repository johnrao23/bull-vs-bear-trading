import React from "react";
import { connect } from "react-redux";
import { resetUserData, resetStockData } from "../actions/userActions";
import { Row } from "react-bootstrap";

const ResetAccount = () => {
  const handleReset = (user) => {
    props.resetUserData(user);
    props.resetStockData(user);
  };

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
