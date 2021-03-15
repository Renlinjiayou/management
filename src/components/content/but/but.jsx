import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';



class But extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             
            <Breadcrumb style={{ margin: '14px 0', background: '#999'}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
         );
    }
}
 
export default But;