import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onGameTypeClick } from '../../actions/action_onGameTypeClick';

import PageCharacterSelectComponent from './PageCharacterSelectComponent';

const mapStateToProps = state => {
  console.log(state);
  return {
    gametype: state.gametype
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onGameTypeClick }, dispatch);
};

const PageCharacterSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageCharacterSelectComponent);

export default PageCharacterSelectContainer;
