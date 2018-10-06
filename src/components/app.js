import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from '../components/navBar';

import EventEditor from '../containers/createEvent';

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <hr />
        <Switch>
          <Route exact path="/create" component={EventEditor} />
          <Route render={() => (<div>No posts found </div>)} />
        </Switch>
      </div>
    </Router>

  );
};

export default App;
