import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Header extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    if (this.props.state) {
      this.state = this.props.state;
    } else {
      this.state = {
        isSignedIn: false,
        name: ""
      };
    }
    console.log(`Header name: ${this.state.name}`);
  }

  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-end">
                <a
                  href="/Home"
                  className="navbar-item"
                  onClick={this.handleHome}
                >
                  Home {this.state.name}
                </a>
                <a
                  href="/SignIn"
                  className="navbar-item"
                  style={{ display: this.state.isSignedIn ? "none" : "" }}
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  handleHome = () => {
    this.props.history.push({
      pathname: "/Home",
      state: {
        isSignedIn: this.props.state.isSignedIn,
        name: this.props.state.name
      }
    });
  };
}

export default withRouter(Header);
