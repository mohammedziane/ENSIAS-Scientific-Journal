import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';


import React, { Component } from 'react';
import {Menu} from 'primereact/menu';


 class MenuDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Options',
                items: [{label: 'Upload', icon: 'pi pi-fw pi-upload', command:()=>{ window.location.hash="/fileupload"; }},
                        {label: 'Home', icon: 'pi pi-fw pi-home', url: 'http://primetek.com.tr'}]
            },
            {
                label: 'Account',
                items: [{label: 'Edit profile', icon: 'pi pi-fw pi-cog', command:()=>{ window.location.hash="/"; }},
                        {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
            }
        ];
    }

    render() {
        return (
            <div className="button-demo">

                <Menu model={this.items}/>
            </div>
        )
    }
}
                
export default MenuDemo;
