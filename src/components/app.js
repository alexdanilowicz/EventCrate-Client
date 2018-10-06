import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Board from '../components/board';
import logo from '../img/logo-HOME.png';

import EventEditor from '../containers/createEvent';
import ReviewQueue from '../containers/reviewQueue';

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Board} />
          <Route exact path="/create" component={EventEditor} />
          <Route exact path="/review" component={ReviewQueue} />
          <Route render={() => (<div>No posts found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

const Nav = (props) => {
  return (
    <Menu stackable>
      <Menu.Item>
        <img src={logo} alt="logo" />
      </Menu.Item>

      <Menu.Item
        name="Browse"
        as={NavLink}
        exact
        to="/"
      >
            Browse
      </Menu.Item>

      <Menu.Item
        name="Submit"
        as={NavLink}
        exact
        to="/create"
      >
            Submit
      </Menu.Item>

      <Menu.Item
        name="Review"
        as={NavLink}
        exact
        to="/review"
      >
            Review

      </Menu.Item>
    </Menu>
  );
};


export default App;
