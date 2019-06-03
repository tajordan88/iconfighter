import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onCharacterSelect1Click } from '../../actions/action_onCharacterSelect1Click';

import PVPComponent from './PVPComponent';

const mapStateToProps = state => {
  return {
    gametype: state.gametype,
    character1: state.character1,
    character2: state.character2
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onCharacterSelect1Click }, dispatch);
};

const PVPContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PVPComponent);

export default PVPContainer;
