import React from 'react';
import APIData from '../../assets/APIData';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Beer.scss';

class BackButton extends React.Component {
  render = () => (
    <Col className="mt-3 mb-5" xs={12}>
      <LinkContainer to={''}>
        <Button variant="outline-secondary">&#8592; Back</Button>
      </LinkContainer>
    </Col>
  );
}

class WithFallbackInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: props.tag || 'span',
      name: '',
      value: '',
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      name: props.name,
      value: props.value || 'N/A',
    };
  }

  render = () => {
    const { tag, name, value, ...props } = this.props;
    return (
      <this.state.tag {...props}>
        {this.state.name ? `${this.state.name}: ` : null}
        {this.state.value}
      </this.state.tag>
    );
  };
}

export default class Beer extends React.Component {
  beerProperties = ['abv', 'ibu', 'ph'];

  constructor(props) {
    super(props);
    this.api = new APIData();
    this.state = {
      beer: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.api.getBeer(id).then(({ data }) => {
      console.log(data[0]);
      this.setState({ beer: data[0] });
    });
  }

  render = () => (
    <Row>
      <BackButton />
      <Col xs={12} md={6} lg={4}>
        <Image className="beer-thumbnail" src={this.state.beer.image_url} fluid />
      </Col>
      <Col xs={12} md={6} lg={8}>
        <Row>
          <Col xs={12}>
            <h1 className="display-2">{this.state.beer.name}</h1>
            <h3 className="mb-3">{this.state.beer.tagline}</h3>
          </Col>
          <Col xs={12}>
            <WithFallbackInfo className="m-0" tag="p" value={this.state.beer.description} />
          </Col>
          <Col xs={12} className="my-2">
            <Row>
              {this.beerProperties.map(prop => (
                <Col md={4} key={prop}>
                  <WithFallbackInfo name={prop.toUpperCase()} value={this.state.beer[prop]} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={12}>
            <WithFallbackInfo name="first brewed" value={this.state.beer.first_brewed} />
          </Col>
          <Col xs={12} className="mt-5">
            <h5 className="mb-3">Additional info:</h5>
            <Row>
              <Col>
                <WithFallbackInfo tag="p" name="Brewers tips" value={this.state.beer.brewers_tips} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
