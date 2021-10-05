import React from "react";
import { withRouter } from "react-router";
import Header from "../components/Header";
// import Footer from '../component/sFooter';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(`HOME ${props}`);
    console.log(this.props.location.state);
    if (this.props.location.state) {
      this.state = this.props.location.state;
    } else {
      this.state = {
        isSignedIn: false,
        name: ""
      };
    }
  }

  render() {
    return (
      <div className="hero is-primary is-fullheight">
        <Header state={this.state} />
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Home {this.state.name}</h1>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default withRouter(Home);
