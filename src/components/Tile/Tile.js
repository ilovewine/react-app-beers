import './Tile.scss';
import { Card, Col, ResponsiveEmbed } from 'react-bootstrap';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

function truncate(text, amount = 100) {
  if (text.length > amount) return text.slice(0, amount) + '...';
  return text;
}

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beer: props.beer };
  }

  render = () => (
    <Col xs={12} sm={6} md={4} lg={3} className="py-3">
      <LinkContainer to={`beer/${this.state.beer.id}`}>
        <Card className="text-dark beer-button">
          <div className="p-2">
            <ResponsiveEmbed aspectRatio="1by1">
              <div className="beer-img" style={{ backgroundImage: `url(${this.state.beer.image_url})` }} />
            </ResponsiveEmbed>
          </div>
          <Card.Body>
            <Card.Title className="text-center m-0">{truncate(this.state.beer.name, 15)}</Card.Title>
          </Card.Body>
        </Card>
      </LinkContainer>
    </Col>
  );
}
