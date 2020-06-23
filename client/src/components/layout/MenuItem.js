import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import Logout from '../../actions-services/auth/logout';

class MenuDemo extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      
      {
        label: 'Log out',
        items: [

          {
            label: 'Sign Out',
            icon: 'pi pi-fw pi-power-off',
            command: () => {
              this.props.Logout();
              window.location = '/auth';
            },
          },
        ],
      },
    ];
  }

  render() {
    return (
      <div className='button-demo'>
        <Menu
          model={this.items}
          popup={true}
          ref={(el) => (this.menu = el)}
          id='popup_menu'
        />
       
        <Button
          label='Show'
          icon='pi pi-bars'
          onClick={(event) => this.menu.toggle(event)}
          aria-controls='popup_menu'
          aria-haspopup={true}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  idUser: state.user.id_user,
});

export default connect(mapStateToProps, { Logout })(MenuDemo);
