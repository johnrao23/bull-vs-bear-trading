import React, { useReducer } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import { resetUserData, resetStockData } from "../actions/userActions";
import { Row } from "react-bootstrap";

const ResetAccount = () => {
  // ResetAccount.propTypes = {
  //   resetUserData: PropTypes.func.isRequired,
  //   resetStockData: PropTypes.func.isRequired,
  //   stock: PropTypes.object.isRequired,
  //   isAuthenticated: PropTypes.bool,
  //   auth: PropTypes.object.isRequired,
  //   error: PropTypes.object.isRequired,
  //   success: PropTypes.object,
  //   user: PropTypes.object,
  // };

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleReset = () => {
    dispatch(resetUserData(user));
    dispatch(resetStockData(user));
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

// const mapStateToProps = (state) => ({
//   stock: state.stock,
//   isAuthenticated: state.auth.isAuthenticated,
//   auth: state.auth,
//   error: state.error,
//   success: state.success,
//   user: state.user,
//   history: state.user.history,
//   balance: state.user.balance,
// });

// export default connect(mapStateToProps, { resetUserData, resetStockData })(
//   ResetAccount
// );

export default ResetAccount;
