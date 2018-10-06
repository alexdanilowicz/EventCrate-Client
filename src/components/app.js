import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Board from '../components/board';
import logo from '../img/logo-HOME.png';

const Submit = (props) => {
  return <div> submit </div>;
};

const Review = (props) => {
  return <div> review </div>;
};

const Welcome = (props) => {
  return (
    <div>
      <Board />
    </div>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/submit" component={Submit} />
          <Route path="/review" component={Review} />
          <Route component={FallBack} />
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
        to="/submit"
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