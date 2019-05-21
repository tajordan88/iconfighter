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

  renderCharacter1() {
    console.log(this.props.character1.name);
    let character1 = (
      <div>
        <h3>{this.props.character1.name}</h3>
        <h2>{this.props.character1.icon}</h2>
        <h6>
          hp:{this.props.character1.hp} sp:{this.props.character1.sp}
        </h6>
        <h6>
          atk:{this.props.character1.atk} def:{this.props.character1.def}
        </h6>
        {(this.props.character1.selected) ? (
          this.props.character1.confirmed ? (
            <button disabled>Confirm</button>
          ) : (
            <button onClick={() => this.props.onCharacterConfirm1Click(1)}>Confirm</button>
          )
        ):
        (
          ''
        )}
        
      </div>
    );
    return character1;
  }

  renderCharacter2() {
    console.log(this.props.character2);
    let character2 = (
      <div>
        <h3>{this.props.character2.name}</h3>
        <h2>{this.props.character2.icon}</h2>
        <h6>
          hp:{this.props.character2.hp} sp:{this.props.character2.sp}
        </h6>
        <h6>
          atk:{this.props.character2.atk} def:{this.props.character2.def}
        </h6>
        {(this.props.character2.selected) ? (
          this.props.character2.confirmed ? (
            <button disabled>Confirm</button>
          ) : (
            <button onClick={() => this.props.onCharacterConfirm2Click(1)}>Confirm</button>
          )
        ):
        (
          ''
        )}
        
      </div>
    );
    return character2;
  } 

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
            <Col>{this.renderCharacter1()}</Col>
            <Col>VS.</Col>
            <Col>{this.renderCharacter2()}</Col>
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
