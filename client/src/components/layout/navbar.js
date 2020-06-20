import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logout from '../../actions-services/logout';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  authLinks = (
    <ul>
      <Nav.Link href='/dashboard/profiles'>Scientists</Nav.Link>
      <Nav.Link href='/posts'>posts</Nav.Link>
      <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
      <Form inline>
      <InputText
                      type='text'
                      name='search'
                      placeholder='search'
                    />
        <Button label="Search" className="p-button-secondary" />

      </Form>
      <Nav.Link href='/' onClick={this.props.logout}>
        Logout
      </Nav.Link>
    </ul>
  );
  guestLinks = (
    <ul>
      <Nav.Link href='/profiles'>Scientists</Nav.Link>
      <Nav.Link href='/auth'>Sign In || Sign Up</Nav.Link>
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
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout })(MyNavbar);
