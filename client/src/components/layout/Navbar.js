import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

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
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <b>Hey there,</b> {(user.name || "").split(" ")[0]}
                </li>
                <li>
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
