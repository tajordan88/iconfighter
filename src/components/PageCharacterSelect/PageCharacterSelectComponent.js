import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import characters from '../../db/characters';

class PageCharacterSelect extends Component {
  renderCharacterList() {
    const characterList = characters.map(character => (
      <button key={character.name}>
        {character.name}
        {character.icon}
      </button>
    ));
    return characterList;
  }

  // renderCharacter1() {
  //   return 
  // }

  render() {
    console.log(this.props);
    console.log(this.state);
    console.log(characters);
    return (
      <section>
        <Container>
          <h1>Select Character</h1>
          <Row>
            <Col>{this.renderCharacterList()}</Col>
          </Row>
          <Row>
            <Col>Character1</Col>
            <Col>VS.</Col>
            <Col>Character2</Col>
          </Row>
          <Row>
            <Col>
              <Link className="btn btn-danger" to={`/${this.props.gametype}`}>
                FIGHT!
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PageCharacterSelect;
