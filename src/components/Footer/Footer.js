import './Footer.scss';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default class Footer extends React.Component {
  render = () => (
    <Container fluid className="footer w-100 mt-auto bg-dark py-3" as="footer">
      <Row>
        <Col className="text-center">Created by Mateusz Piątkowski &bull; 2021</Col>
      </Row>
    </Container>
  );
}
