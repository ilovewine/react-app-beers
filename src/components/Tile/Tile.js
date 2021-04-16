import './Tile.scss';
import React from 'react';

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
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-3">
      <button className="card text-dark ratio ratio-1x1 row beer-button">
        <div className="col-12 p-3 d-flex flex-column">
          <div className="row justify-content-center">
            <div className="col-12 h-75 w-75">
              <div className="ratio ratio-1x1">
                <div style={{ backgroundImage: `url(${this.state.beer.image_url})` }} className="beer-image" />
              </div>
            </div>
          </div>
          <div className="row mt-auto">
            <div className="card-body col-12">
              <h6 className="card-title text-center m-0">{this.state.beer.name}</h6>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
