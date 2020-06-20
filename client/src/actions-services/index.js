import { bindActionCreators } from 'redux';
import login from './auth/auth.service';
import register from './auth/register.service';

export default function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ register }, dispatch),
  };
}
