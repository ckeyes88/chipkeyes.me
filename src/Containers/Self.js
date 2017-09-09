import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Self from '../Components/Self';


function mapStateToProps(state) {
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Self);
