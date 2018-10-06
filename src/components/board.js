import React from 'react';
import { Card } from 'semantic-ui-react';
import EventCard from '../components/event-card';

const Board = () => (
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

export default Board;
