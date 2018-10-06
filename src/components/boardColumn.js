import React from 'react';
import { Card } from 'semantic-ui-react';
import EventCard from '../components/event-card';

const getRandomColor = () => {
  const colorValues = ['red', 'blue', 'green', 'yellow', 'teal', 'violet', 'orange', 'purple', 'pink'];
  return colorValues[Math.floor(Math.random() * colorValues.length)];
};

const BoardColumn = (props) => {
  const cards = props.events.map(eventInfo => (
    <Card.Group key={eventInfo.id}>
      <EventCard
        eventName={eventInfo.name}
        eventStartTime={eventInfo.startTime}
        eventEndTime={eventInfo.endTime}
        eventLocation={eventInfo.location}
        eventClubName={eventInfo.clubName}
        eventContent={eventInfo.description}
        eventTagColor={`${getRandomColor()}`}
        eventTags={`${eventInfo.clubName}, ${eventInfo.name}`}
      />
    </Card.Group>
  ));

  return (
    <div className="board-column">
      <h3 className="ui header">
        {props.title}
      </h3>
      <div className="column-items">
        {cards}
      </div>
    </div>
  );
};

export default BoardColumn;
