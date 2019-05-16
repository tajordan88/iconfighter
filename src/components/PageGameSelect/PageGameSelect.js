import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageGameSelect = () => {
  return (
    <section id="PageGameSelect">
      <Container>
        <h1>Select Game Mode</h1>
        <Row>
          <Col>
            <Link to="/PageCharacterSelect">Player vs. Computer</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/PageCharacterSelect">Player vs. Player</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/PageCharacterSelect">Dungeon</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageGameSelect;
