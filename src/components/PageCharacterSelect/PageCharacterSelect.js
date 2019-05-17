import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import { GiRunningNinja, GiArcher, GiPikeman, GiRead } from 'react-icons/gi';

const PageCharacterSelect = () => {
  return (
    <section>
      <Container>
        <h1>Select Character</h1>
        <Row>
          <Col>
            <button>
              <GiRunningNinja />
            </button>
            <button>
              <GiArcher />
            </button>
            <button>
              <GiPikeman />
            </button>
            <button>
              <GiRead />
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            Character1
          </Col>
          <Col>VS.</Col>
          <Col>
            Character2
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageCharacterSelect;
