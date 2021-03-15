import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {withRouter} from 'react-router-dom'

import But from '../../components/content/but/but'

import Butcontent from '../../components/content/butcotent/butcontent'


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <But/>
                
                <Butcontent>
                Category1111111111

                </Butcontent>
                
                </div>
         );
    }
}
 
export default withRouter(Category);
