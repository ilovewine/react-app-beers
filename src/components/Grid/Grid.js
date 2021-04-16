import React from 'react';
import Tile from '../Tile/Tile';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beers: [] };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.beers.length !== this.props.beers.length)
      this.setState({
        beers: this.props.beers,
      });
  }

  render = () => (
    <div className="row">
      {this.state.beers.map(beer => (
        <Tile beer={beer} key={beer.id} />
      ))}
    </div>
  );
}
