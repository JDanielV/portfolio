import React from 'react';
import TorumContainer from './Components/torum/TorumContainer';
import PortfolioContainer from './Components/portfolio/PortfolioContainer';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Redirect exact from="/torum" to="/" /> */}
        <Switch>
          <Route path="/" exact>
            <PortfolioContainer />
          </Route>
          <Route path="/torum" exact>
            <TorumContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
