import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import { refreshUserData, resetUserData } from "../actions/userActions";
import { Row } from "react-bootstrap";


class ResetAccount extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false
      };
    }
  
    render() {
      return (
        <Row className="mt-4 mb-4 justify-content-center">
          <button>Reset Account</button>
        </Row>
      );
    }
  }

export default ResetAccount;
