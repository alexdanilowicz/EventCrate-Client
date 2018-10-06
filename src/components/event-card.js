import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Card color={this.props.eventTagColor}>
        <Card.Content>
          <Card.Header>{this.props.eventName}</Card.Header>
          <Card.Meta><strong>{this.props.eventClubName}</strong></Card.Meta>
          <Card.Meta>{this.props.eventStartTime} - {this.props.eventEndTime}</Card.Meta>
          <Card.Description>{this.props.eventLocation}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {this.props.eventContent}
          <div className="tags-line">
            <Icon name="tags" />
            {this.props.eventTags}
          </div>
        </Card.Content>
      </Card>
    );
  }
}


export default EventCard;
