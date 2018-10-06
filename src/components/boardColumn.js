import React from 'react';
import { Card } from 'semantic-ui-react';
import EventCard from '../components/event-card';

const BoardColumn = (props) => {
  return (
    <div className="board-column">
      <div className="column-title"> {props.title} </div>
      <div className="column-items">
        <Card.Group>
          <EventCard
            eventName="Test"
            eventStartTime="Test"
            eventEndTime="Test"
            eventLocation="Test"
            eventClubName="Test"
            eventContent="Test"
            eventTagColor="green"
            eventTags="CS, Hackathon"
          />
        </Card.Group>
        <Card.Group>
          <EventCard
            eventName="Test"
            eventStartTime="Test"
            eventEndTime="Test"
            eventLocation="Test"
            eventClubName="Test"
            eventContent="Test"
            eventTagColor="green"
            eventTags="CS, Hackathon"
          />
        </Card.Group>
        <Card.Group>
          <EventCard
            eventName="Test"
            eventStartTime="Test"
            eventEndTime="Test"
            eventLocation="Test"
            eventClubName="Test"
            eventContent="Test"
            eventTagColor="green"
            eventTags="CS, Hackathon"
          />
        </Card.Group>
        <Card.Group>
          <EventCard
            eventName="Test"
            eventStartTime="Test"
            eventEndTime="Test"
            eventLocation="Test"
            eventClubName="Test"
            eventContent="Test"
            eventTagColor="green"
            eventTags="CS, Hackathon"
          />
        </Card.Group>
        <Card.Group>
          <EventCard
            eventName="Test"
            eventStartTime="Test"
            eventEndTime="Test"
            eventLocation="Test"
            eventClubName="Test"
            eventContent="Test"
            eventTagColor="green"
            eventTags="CS, Hackathon"
          />
        </Card.Group>
        <Card.Group>
          <EventCard
            eventName="Test"
            eventStartTime="Test"
            eventEndTime="Test"
            eventLocation="Test"
            eventClubName="Test"
            eventContent="Test"
            eventTagColor="green"
            eventTags="CS, Hackathon"
          />
        </Card.Group>
        v
        <Card.Group>
          <EventCard
            eventName="Test"
            eventStartTime="Test"
            eventEndTime="Test"
            eventLocation="Test"
            eventClubName="Test"
            eventContent="Test"
            eventTagColor="green"
            eventTags="CS, Hackathon"
          />
        </Card.Group>
      </div>
    </div>
  );
};

export default BoardColumn;
