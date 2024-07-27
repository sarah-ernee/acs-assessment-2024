import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Calculator} />
        <Route path="/page2" component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
