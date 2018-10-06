import React from 'react';
import { Card } from 'semantic-ui-react';
import EventCard from '../components/event-card';

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
        eventTagColor="green"
        eventTags="CS, Hackathon"
      />
    </Card.Group>
  ));

  return (
    <div className="board-column">
      <div className="column-title"> {props.title} </div>
      <div className="column-items">
        {cards}
      </div>
    </div>
  );
};

export default BoardColumn;
