import React from 'react';
import TorumContainer from './Components/torum/TorumContainer';
import PortfolioContainer from './Components/portfolio/PortfolioContainer';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
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
