import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import { resetUserData, resetStockData } from "../actions/userActions";
import { Row } from "react-bootstrap";

const ResetAccount = () => {
  return (
    <button
      onClick={() => {
        resetUserData();
        resetStockData();
      }}
    >
      Reset Account
    </button>
  );
};

export default ResetAccount;
