import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logout from '../../actions-services/logout';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  authLinks = (
    <ul>
      <li>
        <Link to='/dashboard/profiles' onClick={this.props.logout}>
          Scientists
        </Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        |
        <Link to='/dashboard' title='Dashboard'>
          <i className='fas fa-user'></i>
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to='/' title='Logout' onClick={this.props.logout}>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );
  guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Scientists</Link>
      </li>
      <li>
        <Link to='/auth'>Sign In || Sign Up</Link>
      </li>
    </ul>
  );
  render() {
    return (
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>
            <i className='fas fa-code'></i> onScience
          </Link>
        </h1>
        {
          <div>
            {this.props.isAuthenticated ? this.authLinks : this.guestLinks}
          </div>
        }
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout })(Navbar);
