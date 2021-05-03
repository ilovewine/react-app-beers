import React from 'react';
import Tile from '../Tile/Tile';
import { Row } from 'react-bootstrap';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beers: [] };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      beers: props.beers,
    };
  }

  render = () => (
    <Row>
      {this.state.beers.map(beer => (
        <Tile beer={beer} key={beer.id} />
      ))}
    </Row>
  );
}
