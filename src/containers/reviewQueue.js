import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Card, Divider, Statistic } from 'semantic-ui-react';

import { getReviewEvents, approveEvent, declineEvent } from '../actions';

class ReviewQueue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dispIndex: 0,
    };

    this.handleApprove = this.handleApprove.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
    this.renderScore = this.renderScore.bind(this);
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

  renderScore() {
    const {
      name, clubName, startTime, endTime, location, description,
    } = this.props.events[this.state.dispIndex];


    const vals = [name, clubName, startTime, endTime, location, description];
    const profanities = ['fuck', 'shit', 'stupid', 'hell', 'ass'];

    let proCount = 0;
    profanities.forEach((p) => {
      vals.forEach((v) => {
        if (v.indexOf(p) > -1) {
          proCount += 1;
        }
      });
    });

    let proColor = 'green';
    if (proCount > 0) {
      proColor = 'orange';
    } else if (proCount > 4) {
      proColor = 'red';
    }

    let totalCharCount = 0;
    vals.forEach((v) => {
      totalCharCount += v.length;
    });

    let charCountColor = 'green';
    if (totalCharCount >= 0 && totalCharCount < 50) {
      charCountColor = 'red';
    } else if (totalCharCount >= 50 && totalCharCount < 90) {
      charCountColor = 'orange';
    } else if (totalCharCount >= 300 && totalCharCount < 400) {
      charCountColor = 'orange';
    } else if (totalCharCount >= 400) {
      charCountColor = 'red';
    }

    return (
      <Statistic.Group horizontal>
        <Statistic color={proColor}>
          <Statistic.Value>{proCount}</Statistic.Value>
          <Statistic.Label>Potential Profanities</Statistic.Label>
        </Statistic>
        <Divider />
        <Statistic color={charCountColor}>
          <Statistic.Value>{totalCharCount}</Statistic.Value>
          <Statistic.Label>Total Characters</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    );
  }

  render() {
    if (!this.props.events) {
      return (
        <div> Loading events... </div>
      );
    }
    if (this.state.dispIndex >= this.props.events.length) {
      return (
        <div className="review-queue">
          <h1>
            No more events to review.
            <span>&nbsp;&nbsp;</span>
          </h1>
        </div>
      );
    }
    const e = this.props.events[this.state.dispIndex];
    return (
      <div className="review-panel">
        <div className="review-queue">
          <h1 className="ui header">
            Review Events
            <div className="sub header">{this.state.dispIndex} out of {this.props.events.length} reviewed </div>
          </h1>

          <div className="review-event">
            <Card>
              <Card.Content>
                <Card.Header> {e.name} </Card.Header>
                <Card.Meta><strong>{e.clubName} </strong></Card.Meta>
                <Card.Meta>{e.startTime} -  {e.endTime}</Card.Meta>
                <Card.Description>{e.location}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                {e.description}
              </Card.Content>
            </Card>

            <div className="review-metrics">
              <Button.Group>
                <Button positive onClick={this.handleApprove}> Approve </Button>
                <Button.Or />
                <Button negative onClick={this.handleDecline}> Decline </Button>
              </Button.Group>
            </div>
          </div>
        </div>
        <div className="review-metrics">
          {this.renderScore()}
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
