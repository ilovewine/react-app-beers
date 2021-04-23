import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';
import APIData from './assets/APIData';
import { Container } from 'react-bootstrap';

export default class App extends React.Component {
  state = { beers: [] };
  api = new APIData();

  componentDidMount() {
    this.api.getBeers().then(beers => {
      this.setState({ beers: beers.data });
    });
  }

  render = () => (
    <div className="d-flex flex-column">
      <div className="overlay light-primary" />
      <Header />
      <Container className="py-4" as="main">
        <Grid beers={this.state.beers} />
      </Container>
      <Footer />
    </div>
  );
}
