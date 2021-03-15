import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import But from './but/but'
import Butcotent from './butcotent/butcontent'

const { Content } = Layout;

class Contentt extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props);
        return ( 
            <Content style={{ margin: '0 16px' }}>
                {/* <But/>               
                <Butcotent></Butcotent> */}
                {this.props.children}
            </Content>
         );
    }
}
 
export default withRouter(Contentt);