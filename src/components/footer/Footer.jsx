import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const {Footer} = Layout;




class Forterr extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
         );
    }
}
 
export default Forterr;