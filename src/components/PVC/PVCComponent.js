import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Dice1 } from './images/dice1.svg';
import { ReactComponent as Dice2 } from './images/dice2.svg';
import { ReactComponent as Dice3 } from './images/dice3.svg';
import { ReactComponent as Dice4 } from './images/dice4.svg';
import { ReactComponent as Dice5 } from './images/dice5.svg';
import { ReactComponent as Dice6 } from './images/dice6.svg';

import './PVCComponent.css';

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
    diceRoll: 1
  }

  onP1ConfirmClick = () => {
    this.setState({
      p1AttackConfirmed: true,
      attackConfirmed: true
    });
  }

  onP2ConfirmClick = () => {
    this.setState({
      p2AttackConfirmed: true,
      attackConfirmed: true
    });
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

  onP1Special1Click = () => {
    this.setState({
      p1AttackAbilityName: this.props.character1.special1name,
      p1DMG: this.props.character1.special1dmg,
      p1SPCost: this.props.character1.special1spcost,
      p1CTH: this.props.character1.special1cth,
      p1CC: this.props.character1.special1cc,     
      p1AttackSelected: true
    });
  }

  onP2Special1Click = () => {
    this.setState({
      p2AttackAbilityName: this.props.character2.special1name,
      p2DMG: this.props.character2.special1dmg,
      p2SPCost: this.props.character2.special1spcost,
      p2CTH: this.props.character2.special1cth,
      p2CC: this.props.character2.special1cc,     
      p2AttackSelected: true
    });
  }

  onP1Special2Click = () => {
    this.setState({
      p1AttackAbilityName: this.props.character1.special2name,
      p1DMG: this.props.character1.special2dmg,
      p1SPCost: this.props.character1.special2spcost,
      p1CTH: this.props.character1.special2cth,
      p1CC: this.props.character1.special2cc,     
      p1AttackSelected: true
    });
  } 

  onP2Special2Click = () => {
    this.setState({
      p2AttackAbilityName: this.props.character2.special2name,
      p2DMG: this.props.character2.special2dmg,
      p2SPCost: this.props.character2.special2spcost,
      p2CTH: this.props.character2.special2cth,
      p2CC: this.props.character2.special2cc,     
      p2AttackSelected: true
    });
  } 

  onDiceRollClick = () => {
    //roll dice
    //
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    this.setState({ diceRoll: diceRoll });
    
    if (this.state.turn === 1) {
      // SP adjusted for special ability used
      let sp = this.state.p1SP - this.state.p1SPCost;
      this.setState({ p1SP: sp });

      // Chance To Hit is determined by dice roll. Lower CTH = better hit chance. (1 is best)
      if (diceRoll >= this.state.p1CTH) {
        // Calculate how much damage to do.
        let dmg = this.state.p2HP - (this.state.p1DMG);
        // Set damage to do.
        this.setState({
          p2HP: dmg
        })
      } else {
        alert("You Missed!");
      }
      this.setState({ 
        turn: 2,
        p2AttackConfirmed: false
      });
    }

    if (this.state.turn === 2) {
      // SP adjusted for special ability used
      let sp = this.state.p2SP - this.state.p2SPCost;
      this.setState({ p2SP: sp });

      // Chance To Hit is determined by dice roll. Lower CTH = better hit chance. (1 is best)
      if (diceRoll >= this.state.p2CTH) {
        // Calculate how much damage to do.
        let dmg = this.state.p1HP - (this.state.p2DMG);
        // Set damage to do.
        this.setState({
          p1HP: dmg
        })
      } else {
        alert("You Missed!");
      }
      this.setState({ 
        turn: 1,
        p1AttackConfirmed: false
       });
    }

    this.setState({
      attackConfirmed: false
    });


  }

  updateDice = () => {
    console.log("updateDice entered");
    switch(this.state.diceRoll) {
      case 1:
        return <Dice1 width="100px" style={{marginLeft: "20px"}} />;
      case 2:
        return <Dice2 width="100px" style={{marginLeft: "20px"}} />;
      case 3:
        return <Dice3 width="100px" style={{marginLeft: "20px"}} />;
      case 4:
        return <Dice4 width="100px" style={{marginLeft: "20px"}} />;
      case 5:
        return <Dice5 width="100px" style={{marginLeft: "20px"}} />;
      case 6:
        return <Dice6 width="100px" style={{marginLeft: "20px"}} />;
      default:
        return <Dice1 width="100px" style={{marginLeft: "20px"}} />;
    }
  }

  componentDidUpdate() {
    // End Game Logic
    if (this.state.p1HP <= 0) {
      alert("Player 2 Wins!");
      this.props.history.push('/PageGameSelect');
    } else if (this.state.p2HP <= 0) {
      alert("Player 1 Wins!")
      this.props.history.push('/PageGameSelect');
    }
  }

  render() {
    // console.log(this.props);
    console.log(this);
    return (
      <section id="PVC">
        <Container>
          {/* PLAYER2 */}
          <Row className="mt-5">
            <Col>
              <button disabled={(this.state.turn === 1 || this.state.p2AttackConfirmed) ? true : false} onClick={this.onP2AttackClick}>ATTACK</button>
              <button disabled={(this.state.turn === 1 || this.state.p2AttackConfirmed || this.state.p2SP - this.props.character2.special1spcost <= -1) ? true : false} onClick={this.onP2Special1Click}>SPECIAL1</button>
              <button disabled={(this.state.turn === 1 || this.state.p2AttackConfirmed || this.state.p2SP - this.props.character2.special2spcost <= -1) ? true : false} onClick={this.onP2Special2Click}>SPECIAL2</button>
              <div className="mt-3">
                <button disabled={(this.state.turn === 1 || !this.state.p2AttackSelected || this.state.p2AttackConfirmed) ? true : false} onClick={this.onP2ConfirmClick}>CONFIRM</button>
              </div>
            </Col>
            <Col>
              <Row className="mb-3">
                <Col>HP: {this.state.p2HP}</Col>
                <Col>SP: {this.state.p2SP}</Col>
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
                  Chance To Hit: {this.state.p2CTH} <br />
                  Critical Chance: {this.state.p2CC}% <br />
                </Col>
              </Row>
            </Col>
          </Row>
          {/* // PLAYER2 */}


          <Row className="mt-5">
            <Col>
              <button disabled={(!this.state.attackConfirmed) ? true : false} onClick={this.onDiceRollClick}>ROLL DICE</button>
              {this.updateDice()}
            </Col>
          </Row>


          {/* PLAYER 1 */}
          <Row className="mt-5">
            <Col>
              <Row className="mb-3">
                <Col>HP: {this.state.p1HP}</Col>
                <Col>SP: {this.state.p1SP}</Col>
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
                  Chance To Hit: {this.state.p1CTH} <br />
                  Critical Chance: {this.state.p1CC}% <br />
                </Col>
              </Row>
            </Col>
            <Col>
              <button disabled={(this.state.turn === 2 || this.state.p1AttackConfirmed) ? true : false} onClick={this.onP1AttackClick}>ATTACK</button>
              <button disabled={(this.state.turn === 2 || this.state.p1AttackConfirmed || this.state.p1SP - this.props.character1.special1spcost <= -1) ? true : false} onClick={this.onP1Special1Click}>SPECIAL1</button>
              <button disabled={(this.state.turn === 2 || this.state.p1AttackConfirmed || this.state.p1SP - this.props.character1.special2spcost <= -1) ? true : false} onClick={this.onP1Special2Click}>SPECIAL2</button>
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
