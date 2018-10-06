import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Card } from 'semantic-ui-react';
import EventCard from '../components/event-card';
import BoardColumn from '../components/boardColumn';

import { fetchEvents } from '../actions';

const DAY_INTERVAL = 4;

class Board extends Component {
  constructor(props) {
    super(props);

    const d = new Date();

    this.state = {
      curDate: d,
    };

    this.renderCards = this.renderCards.bind(this);
    this.renderColumns = this.renderColumns.bind(this);
    this.goBackward = this.goBackward.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents(this.getDateKey());
  }

  getDateKey() {
    let rawDate = `${this.state.curDate.getDate()}`;
    rawDate = rawDate.length === 1 ? `0${rawDate}` : rawDate;
    let rawMonth = `${this.state.curDate.getMonth()}`;
    rawMonth = rawMonth.length === 1 ? `0${rawMonth}` : rawMonth;

    return `${rawMonth}/${rawDate}`;
  }

  goBackward() {
    this.setState({
      curDate: this.state.d - DAY_INTERVAL,
    });
    this.props.fetchEvents(this.getDateKey());
  }

  goForward() {
    this.setState({
      curDate: this.state.d + DAY_INTERVAL,
    });
    this.props.fetchEvents(this.getDateKey());
  }

  renderColumns() {
    const d = this.state.curDate;

    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const cols = [];
    for (let i = 0; i < DAY_INTERVAL; i += 1) {
      const title = `${weekday[i % 7]}, ${d.getMonth() + 1}/${d.getDate()}`;
      cols.push(title);
      d.setDate(d.getDate() + 1);
    }

    return cols.map(c => (
      <BoardColumn key={c} title={c} />
    ));
  }

  renderCards() {
    return this.props.events.map(eventInfo => (
      <Card.Group key={eventInfo.id}>
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

    console.log(this.props.events);

    return (
      <div className="board">
        {this.renderColumns()}
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
