import React from "react";
import { withRouter } from "react-router";
import Header from "../components/Header";
import Avatar from '@material-ui/core/Avatar';
import Stack from '@mui/material/Stack';
// import Footer from '../component/sFooter';

const memberStyle = {
  // display: "-webkit-flex",
  // display: "-moz-flex",
  // display: "-ms-flex",
  // display: "-o-flex",
  display: "grid",
  gridTemplateColumns: 'repeat(auto-fit, 100px)',
  // justifyItem: "center",
  justifyContent: "center",
  // placeItems: "center",
  alignItems: "center"
}

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
        <div className="member" style={memberStyle}>
          <li>
            aaa
          </li>
          <li>
            bbb
          </li>
          <li>
            ccc
          </li>
          <li>
            ddd
          </li>
        </div>
        <Stack direction="row" spacing={2}>
          <Avatar onClick={() => window.open("https://google.com", "_blank")}>H</Avatar>
          <Avatar>N</Avatar>
          <Avatar>OP</Avatar>
        </Stack>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default withRouter(Home);
