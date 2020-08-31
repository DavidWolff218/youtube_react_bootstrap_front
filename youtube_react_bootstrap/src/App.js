import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  home  from './components/home'
import about from './components/about'
import  contact  from './components/contact'
import  noMatch  from './components/noMatch'
import  { Layout } from './components/Layout'
// import  navBar from './components/navBar'

function App() {
  return (
    <React.Fragment>
      {/* <navBar/> */}
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
          <Route component={noMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
