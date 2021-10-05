import React from "react";
import "./css/App.css";
import "./css/bulma.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

//function App() {
export class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}

export default App;
