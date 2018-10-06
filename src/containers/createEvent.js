import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Input, TextArea, Button } from 'semantic-ui-react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';

import { createEvent } from '../actions';

/* eslint no-prototype-builtins: 0 */

class EventEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      clubName: '',
      description: '',
      location: '',
      start: '',
      end: '',
      date: '',
    };

    this.handleDateStuff = this.handleDateStuff.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleDateStuff = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit() {
    const data = {
      name: this.state.name,
      clubName: this.state.clubName,
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
      <div className="ui form">
        <div className="event-editor">
          <h1>
            Get noticed on campus.
          </h1>

          <div className="two fields">
            <div className="field">
              <div className="editor-title"> Event Title: <span className="editor-required"> * </span></div>
              <Input name="name" placeholder="Event Title" onChange={this.handleChange} />
            </div>
            <div className="field">
              <div className="editor-title"> Club: <span className="editor-required"> * </span></div>
              <Input name="clubName" placeholder="Club Name" onChange={this.handleChange} />
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <div className="editor-title"> Location: <span className="editor-required"> * </span></div>
              <Input name="location" placeholder="Location" onChange={this.handleChange} />
            </div>
            <div className="field">

              <div className="editor-title"> Date: <span className="editor-required"> * </span></div>
              <DateInput
                name="date"
                placeholder="Date"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleDateStuff}
              />


            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <div className="editor-title"> Start Time: <span className="editor-required"> * </span></div>
              <TimeInput
                name="start"
                placeholder="Start Time"
                value={this.state.start}
                iconPosition="left"
                onChange={this.handleDateStuff}
              />
            </div>
            <div className="field">
              <div className="editor-title"> End Time: <span className="editor-required"> * </span></div>
              <TimeInput
                name="end"
                placeholder="End Time"
                value={this.state.end}
                iconPosition="left"
                onChange={this.handleDateStuff}
              />
            </div>
          </div>

          <div className="editor-title"> Description: <span className="editor-required"> * </span></div>
          <TextArea name="description" onChange={this.handleChange} autoHeight placeholder="Event description" style={{ minHeight: 100 }} />
          <br />

          <Button basic color="green" onClick={this.submit} id="submit-create-button">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {
  createEvent,
})(EventEditor));
