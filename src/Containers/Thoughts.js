import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Thoughts from '../Components/Thoughts';
import { getArticles } from '../Actions/Articles';

function mapStateToProps(state) {
  return {
    articles: state.reducer.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getArticles
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thoughts);
