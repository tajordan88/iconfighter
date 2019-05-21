import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import characters from '../../db/characters';

class PageCharacterSelect extends Component {
  renderCharacterList() {
    console.log(this.props);
    // const characterList = characters.map(character => (
    //   <button key={character.name} onClick={() => this.props.onCharacterSelect1Click(character.name)}>
    //     {character.name}
    //     {character.icon}
    //   </button>
    // ));
    let characterList = [];
    Object.keys(characters).forEach(character => {
      let characteritem =  <button key={characters[character].name} onClick={() => this.props.onCharacterSelect1Click(characters[character].name)}>
        {characters[character].name}
        {characters[character].icon}
      </button>
      characterList.push(characteritem);
    });

    return characterList;
  }

  // renderCharacter1() {
  //   return 
  // }

  render() {
    console.log(this.props);
    // console.log(characters);
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
