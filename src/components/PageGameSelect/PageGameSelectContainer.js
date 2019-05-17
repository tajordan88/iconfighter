
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onGameTypeClick } from '../../actions/action_onGameTypeClick';

import PageGameSelectComponent from './PageGameSelectComponent';

const mapStateToProps = state => {
  console.log(state);
  return {
    gametype: state.gametype
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onGameTypeClick }, dispatch);
};

const PageGameSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageGameSelectComponent);

export default PageGameSelectContainer;
