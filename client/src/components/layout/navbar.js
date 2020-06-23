import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  authLinks = (
    <ul>
      <Link to='/profiles'>Scientists</Link>
      <Link to='/posts'>posts</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Form inline>
        <InputText type='text' name='search' placeholder='search' />
        <Button label='Search' className='p-button-secondary' />
      </Form>
    </ul>
  );
  guestLinks = (
    <ul>
      <Link to='/profiles'>Scientists</Link>
      <Link to='/auth'>Sign In</Link>
    </ul>
  );
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>onScience </Navbar.Brand>
        {
          <div>
            {this.props.isAuthenticated ? this.authLinks : this.guestLinks}
          </div>
        }
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(MyNavbar);
