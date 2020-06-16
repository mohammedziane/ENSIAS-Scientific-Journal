import { bindActionCreators } from 'redux';
import login from './auth.service';
import register from './register.service';

export default function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ register }, dispatch),
  };
}
