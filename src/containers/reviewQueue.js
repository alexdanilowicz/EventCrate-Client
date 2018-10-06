import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { getReviewEvents, approveEvent, declineEvent } from '../actions';

class ReviewQueue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dispIndex: 0,
    };

    this.handleApprove = this.handleApprove.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
  }

  componentDidMount() {
    this.props.getReviewEvents();
  }

  handleApprove() {
    this.props.approveEvent(this.props.events[this.state.dispIndex].id);
    this.setState({
      dispIndex: this.state.dispIndex + 1,
    });
  }

  handleDecline() {
    this.props.declineEvent(this.props.events[this.state.dispIndex].id);
    this.setState({
      dispIndex: this.state.dispIndex + 1,
    });
  }

  render() {
    if (!this.props.events) {
      return (
        <div> Loading events... </div>
      );
    }
    if (this.state.dispIndex >= this.props.events.length) {
      return (
        <div> No more events to review! </div>
      );
    }
    const e = this.props.events[this.state.dispIndex];
    return (
      <div className="review-queue">
        <div className="review-event">
          <div className="review-ele"> Event Name: </div>
          <div className="review-res"> {e.name} </div>

          <div className="review-ele"> Club Name: </div>
          <div className="review-res"> {e.clubName} </div>

          <div className="review-ele"> Description: </div>
          <div className="review-res"> {e.description} </div>

          <div className="review-ele"> Location </div>
          <div className="review-res"> {e.location} </div>

          <div className="review-ele"> Start time: </div>
          <div className="review-res"> {e.startTime} </div>

          <div className="review-ele"> End time: </div>
          <div className="review-res"> {e.endTime} </div>

          <div className="review-ele"> Date: </div>
          <div className="review-res"> {e.date} </div>
          <div />
          <div className="review-metrics">
            <Button.Group>
              <Button positive onClick={this.handleApprove}> Approve </Button>
              <Button.Or />
              <Button negative onClick={this.handleDecline}> Decline </Button>
            </Button.Group>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    events: state.review.events,
  }
);

export default withRouter(connect(mapStateToProps, { getReviewEvents, approveEvent, declineEvent })(ReviewQueue));
