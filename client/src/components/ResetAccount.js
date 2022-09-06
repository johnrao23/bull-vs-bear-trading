import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import { refreshUserData, resetUserData } from "../actions/userActions";


class ResetAccount extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false
      };
    }
  
    render() {
      return (
        <button>Reset Account</button>
      );
    }
  }

export default ResetAccount;
