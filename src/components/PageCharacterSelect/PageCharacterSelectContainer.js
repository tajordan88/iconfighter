import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onCharacterSelect1Click } from '../../actions/action_onCharacterSelect1Click';

import PageCharacterSelectComponent from './PageCharacterSelectComponent';

const mapStateToProps = state => {
  // console.log(state);
  return {
    gametype: state.gametype
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onCharacterSelect1Click }, dispatch);
};

const PageCharacterSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageCharacterSelectComponent);

export default PageCharacterSelectContainer;
