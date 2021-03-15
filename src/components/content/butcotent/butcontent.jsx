import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Butcotent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div style={{ padding: 24, background: '#fff', minHeight: 560 }}>{this.props.children}</div>

         );
    }
}
 
export default withRouter(Butcotent);