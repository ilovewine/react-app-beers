import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';
import Beer from './components/Beer/Beer';
import APIData from './assets/APIData';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
  state = { beers: [] };
  api = new APIData();

  componentDidMount() {
    this.api.getBeers().then(beers => {
      this.setState({ beers: beers.data });
    });
  }

  render = () => (
    <Router>
      <div className="d-flex flex-column">
        <div className="overlay light-primary" />
        <Header />
        <Container className="py-4" as="main">
          <Switch>
            <Route exact path="/">
              <Grid beers={this.state.beers} />
            </Route>
            <Route path="/beer/:id" component={Beer} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}
