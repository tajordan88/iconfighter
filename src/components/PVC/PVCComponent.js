import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PVC = (props) => {
  console.log(props);
  return (
    <section id="PVC">
      <Container>
        <Row className="mt-5">
          <Col>
            <button>ATTACK</button>
            <button>SPECIAL1</button>
            <button>SPECIAL2</button>
            <div className="mt-3">
              <button>CONFIRM</button>
            </div>
          </Col>
          <Col>
            <Row className="mb-3">
              <Col>HP: </Col>
              <Col>SP: </Col>
            </Row>
            <Row>
              <Col>
                <h6>Player 2</h6>
                <h6>CharacterName</h6>
                <h4>CharacterIcon</h4>
              </Col>
              <Col>
                <h6>atk/ability name</h6>
                  dmg <br />
                  sp cost <br />
                  chance to hit <br />
                  critical chance <br />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <button>DICE</button>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Row className="mb-3">
              <Col>HP: </Col>
              <Col>SP: </Col>
            </Row>
            <Row>
              <Col>
                <h6>Player 1</h6>
                <h6>CharacterName</h6>
                <h4>CharacterIcon</h4>
              </Col>
              <Col>
                <h6>atk/ability name</h6>
                  dmg <br />
                  sp cost <br />
                  chance to hit <br />
                  critical chance <br />
              </Col>
            </Row>
          </Col>
          <Col>
            <button>ATTACK</button>
            <button>SPECIAL1</button>
            <button>SPECIAL2</button>
            <div className="mt-3">
              <button>CONFIRM</button>
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default PVC;
