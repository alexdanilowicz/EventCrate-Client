import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Input } from 'semantic-ui-react';

import { signInAdmin } from '../../actions';

class AdminSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit() {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.signUpAdmin(data, this.props.history);
  }

  render() {
    return (
      <div className="admin-user-editor">
        <Input name="username" placeholder="Username" onChange={this.handleChange} />
        <Input name="password" placeholder="Password" onChange={this.handleChange} />
      </div>
    );
  }
}

export default withRouter(connect(null, {
  signInAdmin,
})(AdminSignIn));
