import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageGameSelectComponent = ({ onGameTypeClick }) => {
    console.log(onGameTypeClick);
    return (
      <section id="PageGameSelect">
        <Container>
          <h1>Select Game Mode</h1>
          <Row>
            <Col>
              <Link to="/PageCharacterSelect" onClick={() => onGameTypeClick('PVC')}>Player vs. Computer</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/PageCharacterSelect" onClick={() => onGameTypeClick('PVP')}>Player vs. Player</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/PageCharacterSelect" onClick={() => onGameTypeClick('Dungeon')}>Dungeon</Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default PageGameSelectComponent;
