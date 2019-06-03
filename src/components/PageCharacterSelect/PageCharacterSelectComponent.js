import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import characters from '../../db/characters';

class PageCharacterSelect extends Component {
  state = {

  }

  renderCharacterList() {
    // const characterList = characters.map(character => (
    //   <button key={character.name} onClick={() => this.props.onCharacterSelect1Click(character.name)}>
    //     {character.name}
    //     {character.icon}
    //   </button>
    // ));
    let characterList = [];
    Object.keys(characters).forEach(character => {
      let characteritem = (
        <button
          disabled={this.props.character2.confirmed ? true : false}
          key={characters[character].name}
          onClick={() =>
            {this.props.character1.confirmed ? this.props.onCharacterSelect2Click(characters[character].name) : this.props.onCharacterSelect1Click(characters[character].name)}
          }
        >
          {characters[character].name}
          {characters[character].icon}
        </button>
      );
      characterList.push(characteritem);
    });

    return characterList;
  }

  renderCharacter(char, confirmClick) {
    let character = (
      <div>
        <h3>{char.name}</h3>
        <h2>{char.icon}</h2>
        <h6>
          hp:{char.hp} sp:{char.sp}
        </h6>
        <h6>
          atk:{char.atk} def:{char.def}
        </h6>
        {(char.selected) ? (
          char.confirmed ? (
            <button disabled>Confirm</button>
          ) : (
            <button onClick={confirmClick}>Confirm</button>
          )
        ):
        (
          ''
        )}
        
      </div>
    );
    return character;
  }

  renderFightButton = () => {
    console.log(this.props.character2.confirmed);
    return this.props.character2.confirmed === 1 ?
    <Link className="btn btn-danger" to={`/${this.props.gametype}`}>FIGHT!</Link>
    :
    <Link className="btn btn-danger" style={{pointerEvents: "none", opacity: ".5"}} to={`/${this.props.gametype}`} disabled>FIGHT!</Link>   
  }

  render() {
    console.log(this.props);
    return (
      <section>
        <Container>
          <h1>Select Character</h1>
          <Row>
            <Col>{this.renderCharacterList()}</Col>
          </Row>
          <Row>
            <Col>{this.renderCharacter(this.props.character1, () => this.props.onCharacterConfirm1Click(1))}</Col>
            <Col>VS.</Col>
            <Col>{this.renderCharacter(this.props.character2, () => this.props.onCharacterConfirm2Click(1))}</Col>
          </Row>
          <Row>
            <Col>
              {this.renderFightButton()}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PageCharacterSelect;
