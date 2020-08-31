import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
          <Route component={noMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
