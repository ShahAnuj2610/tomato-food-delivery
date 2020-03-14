import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

import "./index.css";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <i className="material-icons">code</i>Tomato
            </Link>
            {Object.keys(user || {}).length !== 0 ? (
              <ul
                id="nav-mobile"
                className="right hide-on-med-and-down list-margin"
              >
                <li>
                  <Link to="/restaurants">All Restaurants</Link>
                </li>
                <li>
                  <Link to="/orders">Your Orders</Link>
                </li>
                <li>
                  <b>Hey there,</b> {(user.name || "").split(" ")[0]}
                </li>
                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a onClick={this.onLogoutClick}>Logout</a>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
