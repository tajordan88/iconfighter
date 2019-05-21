import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onCharacterSelect1Click } from '../../actions/action_onCharacterSelect1Click';
import { onCharacterSelect2Click } from '../../actions/action_onCharacterSelect2Click';
import { onCharacterConfirm1Click } from '../../actions/action_onCharacterConfirm1Click';
import { onCharacterConfirm2Click } from '../../actions/action_onCharacterConfirm2Click';

import PageCharacterSelectComponent from './PageCharacterSelectComponent';

const mapStateToProps = state => {
  // console.log(state);
  return {
    gametype: state.gametype,
    character1: state.character1,
    character2: state.character2
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onCharacterSelect1Click, onCharacterConfirm1Click, onCharacterSelect2Click, onCharacterConfirm2Click }, dispatch);
};

const PageCharacterSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageCharacterSelectComponent);

export default PageCharacterSelectContainer;
