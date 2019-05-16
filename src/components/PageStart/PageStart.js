import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const PageStart = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <h1>ICON FIGHTER</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/PageGameSelect">START</Link>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default PageStart;