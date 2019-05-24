import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class PVC extends Component {
  state = {
    turn: 1,
    totalDMG: 0,
    attackConfirmed: false,
    p1AttackAbilityName: 'none',
    p1DMG: 0,
    p1SPCost: 0,
    p1CTH: 0,
    p1CC: 0,
    p1AttackSelected: false,
    p1AttackConfirmed: false,
    p1HP: this.props.character1.hp,
    p1SP: this.props.character1.sp,
    p2AttackAbilityName: 'none',
    p2DMG: 0,
    p2SPCost: 0,
    p2CTH: 0,
    p2CC: 0,
    p2AttackSelected: false,
    p2AttackConfirmed: false,
    p2HP: this.props.character2.hp,
    p2SP: this.props.character2.sp,    
  }

  componentDidMount() {
    
  }

  onP1ConfirmClick = () => {
    this.setState({
      p1AttackConfirmed: true,
      attackConfirmed: true
    });
  }

  onP2ConfirmClick = () => {
    this.setState({turn: 1});
  } 

  onP1AttackClick = () => {
    this.setState({
      p1AttackAbilityName: 'Normal Attack',
      p1DMG: this.props.character1.atk,
      p1SPCost: 0,
      p1CTH: 0,
      p1CC: 0,     
      p1AttackSelected: true
    });
  }  

  onP2AttackClick = () => {
    this.setState({
      p2AttackAbilityName: 'Normal Attack',
      p2DMG: this.props.character2.atk,
      p2SPCost: 0,
      p2CTH: 0,
      p2CC: 0,     
      p2AttackSelected: true
    });
  }

  onDiceRollClick = () => {
    //roll dice
    //
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    console.log(diceRoll);
    if (this.state.turn === 1) {
      let dmg = this.state.p2HP - (this.props.character1.atk * diceRoll);
      console.log(dmg);
      this.setState({
        p2HP: dmg
      })
    }
    // this.setState({
    //   attackConfirmed: false
    // });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <section id="PVC">
        <Container>
          {/* PLAYER2 */}
          <Row className="mt-5">
            <Col>
              <button disabled={this.state.turn === 1 ? true : false} onClick={this.onP2AttackClick}>ATTACK</button>
              <button disabled={this.state.turn === 1 ? true : false}>SPECIAL1</button>
              <button disabled={this.state.turn === 1 ? true : false}>SPECIAL2</button>
              <div className="mt-3">
                <button disabled={(this.state.turn === 1 || !this.state.p2AttackSelected) ? true : false} onClick={this.onP2ConfirmClick}>CONFIRM</button>
              </div>
            </Col>
            <Col>
              <Row className="mb-3">
                <Col>HP: {this.props.character2.hp}</Col>
                <Col>SP: {this.props.character2.sp}</Col>
              </Row>
              <Row>
                <Col>
                  <h6>Player 2</h6>
                  <h6>{this.props.character2.name}</h6>
                  <h4>{this.props.character2.icon}</h4>
                </Col>
                <Col>
                  <h6>NAME: {this.state.p2AttackAbilityName}</h6>
                  DMG: {this.state.p2DMG} <br />
                  SP COST: {this.state.p2SPCost} <br />
                  CTH: {this.state.p2CTH} <br />
                  CC: {this.state.p2CC} <br />
                </Col>
              </Row>
            </Col>
          </Row>
          {/* // PLAYER2 */}


          <Row className="mt-5">
            <Col>
              <button disabled={(!this.state.attackConfirmed) ? true : false} onClick={this.onDiceRollClick}>DICE</button>
            </Col>
          </Row>


          {/* PLAYER 1 */}
          <Row className="mt-5">
            <Col>
              <Row className="mb-3">
                <Col>HP: {this.props.character1.hp}</Col>
                <Col>SP: {this.props.character1.sp}</Col>
              </Row>
              <Row>
                <Col>
                  <h6>Player 1</h6>
                  <h6>{this.props.character1.name}</h6>
                  <h4>{this.props.character1.icon}</h4>
                </Col>
                <Col>
                  <h6>NAME: {this.state.p1AttackAbilityName}</h6>
                  DMG: {this.state.p1DMG} <br />
                  SP COST: {this.state.p1SPCost} <br />
                  CTH: {this.state.p1CTH} <br />
                  CC: {this.state.p1CC} <br />
                </Col>
              </Row>
            </Col>
            <Col>
              <button disabled={(this.state.turn === 2 || this.state.p1AttackConfirmed) ? true : false} onClick={this.onP1AttackClick}>ATTACK</button>
              <button disabled={(this.state.turn === 2 || this.state.p1AttackConfirmed) ? true : false}>SPECIAL1</button>
              <button disabled={(this.state.turn === 2 || this.state.p1AttackConfirmed) ? true : false}>SPECIAL2</button>
              <div className="mt-3">
                <button disabled={(this.state.turn === 2 || !this.state.p1AttackSelected || this.state.p1AttackConfirmed) ? true : false} onClick={this.onP1ConfirmClick}>CONFIRM</button>
              </div>
            </Col>
          </Row>
          {/* // PLAYER 1 */}
        </Container>
      </section>
    );
  }
}

export default PVC;
