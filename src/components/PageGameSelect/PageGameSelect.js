import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onGameTypeClick } from '../../actions/action_onGameTypeClick';
import { bindActionCreators } from 'redux';

class PageGameSelect extends Component {
  render() {
    console.log(this.props);
    return (
      <section id="PageGameSelect">
        <Container>
          <h1>Select Game Mode</h1>
          <Row>
            <Col>
              <Link to="/PageCharacterSelect" onClick={() => this.props.onGameTypeClick('PVC')}>Player vs. Computer</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/PageCharacterSelect" onClick={() => this.props.onGameTypeClick('PVP')}>Player vs. Player</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/PageCharacterSelect" onClick={() => this.props.onGameTypeClick('Dungeon')}>Dungeon</Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    gametype: state.gametype
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onGameTypeClick }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PageGameSelect);
