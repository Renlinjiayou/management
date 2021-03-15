import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


import './header.css'

const { Header} = Layout;



class Headerr extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Header style={{ background: '#666', padding: 0 }} />
         );
    }
}
 
export default Headerr;