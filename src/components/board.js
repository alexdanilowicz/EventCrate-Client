import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Card } from 'semantic-ui-react';
import EventCard from '../components/event-card';

import { fetchEvents } from '../actions';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  renderCards() {
    return this.props.events.map(eventInfo => (
      <Card.Group >
        <EventCard
          eventName={eventInfo.name}
          eventStartTime={eventInfo.startTime}
          eventEndTime={eventInfo.endTime}
          eventLocation={eventInfo.location}
          eventClubName={eventInfo.clubName}
          eventContent={eventInfo.description}
          eventTagColor="green"
          eventTags="CS, Hackathon"
        />
      </Card.Group>
    ));
  }

  render() {
    if (!this.props.events) {
      return (
        <div> Loading events... </div>
      );
    }

    return (
      <div>
        <Card.Group >
          <EventCard
            eventName="HackDay III"
            eventStartTime="9:00 AM"
            eventEndTime="9:00 PM"
            eventLocation="Magnuson Center (DEN)"
            eventClubName="Hacker Club"
            eventContent="Meet new people and build things!"
            eventTagColor="green"
            eventTags="CS, Hackathon"
          />
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    events: state.events.events,
  }
);

export default withRouter(connect(mapStateToProps, { fetchEvents })(Board));
