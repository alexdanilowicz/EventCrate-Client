import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Input, TextArea, Button } from 'semantic-ui-react';

import { createEvent } from '../actions';

class EventEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      location: '',
      start: '',
      end: '',
      date: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit() {
    const data = {
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      start: this.state.start,
      end: this.state.end,
      date: this.state.date,
    };

    this.props.createEvent(data, this.props.history);
  }

  render() {
    return (
      <div className="event-editor">
        <div className="editor-title"> Name: <span className="editor-required"> * </span></div>
        <Input name="name" placeholder="Event name" onChange={this.handleChange} />
        <div className="editor-title"> Description: <span className="editor-required"> * </span></div>
        <TextArea name="description" onChange={this.handleChange} autoHeight placeholder="Event description" style={{ minHeight: 100 }} />
        <div className="editor-title"> Location: <span className="editor-required"> * </span></div>
        <Input name="location" placeholder="Location" onChange={this.handleChange} />
        <div className="editor-title"> Start Time: <span className="editor-required"> * </span></div>
        <Input name="start" placeholder="Start Time" onChange={this.handleChange} />
        <div className="editor-title"> End Time: <span className="editor-required"> * </span></div>
        <Input name="end" placeholder="End Time" onChange={this.handleChange} />
        <div className="editor-title"> Date: <span className="editor-required"> * </span></div>
        <Input name="date" placeholder="Date" onChange={this.handleChange} />
        <br />
        <Button onClick={this.submit} content="Submit Event" />
      </div>
    );
  }
}

export default withRouter(connect(null, {
  createEvent,
})(EventEditor));
