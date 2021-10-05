import React from "react";
import { withRouter } from "react-router";
import Header from "../components/Header";
// import Footer from '../component/Footer';

//function App() {
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      name: "aaa"
    };
  }

  render() {
    return (
      <div className="hero is-primary is-fullheight">
        <Header state={this.state} />
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">SignIn</h1>
          </div>
        </div>
        {/* <Footer/>  */}
      </div>
    );
  }
}

export default withRouter(SignIn);
