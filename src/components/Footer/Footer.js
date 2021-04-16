import './Footer.scss';
import React from 'react';

export default class Footer extends React.Component {
  render = () => (
    <footer className="footer w-100 mt-auto bg-dark py-3 container-fluid">
      <div className="row">
        <div className="col text-center">Created by Mateusz Piątkowski &bull; 2021</div>
      </div>
    </footer>
  );
}
