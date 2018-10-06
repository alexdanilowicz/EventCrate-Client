import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import BoardColumn from '../components/boardColumn';

import { fetchEvents } from '../actions';

const DAY_INTERVAL = 4;

class Board extends Component {
  constructor(props) {
    super(props);

    const d = new Date();

    this.state = {
      curDate: d,
      dayIndex: d.getDay(),
    };

    this.renderColumns = this.renderColumns.bind(this);
    this.goBackward = this.goBackward.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents(this.getDateKey(this.state.curDate));
  }

  getDateKey = (d) => {
    let rawDate = `${d.getDate()}`;
    rawDate = rawDate.length === 1 ? `0${rawDate}` : rawDate;
    let rawMonth = `${d.getMonth() + 1}`;
    rawMonth = rawMonth.length === 1 ? `0${rawMonth}` : rawMonth;

    return `${rawMonth}/${rawDate}`;
  }

  goBackward() {
    const newTime = new Date(this.state.curDate.getTime());
    newTime.setDate(newTime.getDate() - DAY_INTERVAL);
    this.setState({
      curDate: newTime,
      dayIndex: this.state.dayIndex - DAY_INTERVAL,
    });

    this.props.fetchEvents(this.getDateKey(this.state.curDate));
  }

  goForward() {
    const newTime = new Date(this.state.curDate.getTime());
    newTime.setDate(newTime.getDate() + DAY_INTERVAL);
    this.setState({
      curDate: newTime,
      dayIndex: this.state.dayIndex + DAY_INTERVAL,
    });

    this.props.fetchEvents(this.getDateKey(this.state.curDate));
  }

  renderColumns() {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const cols = [];
    // const keys = [];

    const keys = Object.keys(this.props.events);

    for (let i = 0; i < DAY_INTERVAL; i += 1) {
      const title = `${weekday[(this.state.dayIndex + i) % 7]}, ${keys[i]}`;
      cols.push(title);
    }

    return cols.map((c, i) => (
      <BoardColumn key={c} title={c} events={this.props.events[keys[i]]} />
    ));
  }

  render() {
    if (!this.props.events) {
      return (
        <div> Loading events... </div>
      );
    }

    return (
      <div className="board-container">
        <Button onClick={this.goBackward} id="backward" className="ui-button backward"> <Icon name="arrow left" size="large" /> </Button>
        <Button onClick={this.goForward} id="forward" className="ui-button forward"> <Icon name="arrow right" size="large" /> </Button>
        <div className="board">
          {this.renderColumns()}
        </div>
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
