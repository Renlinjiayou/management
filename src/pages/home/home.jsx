import React, { Component } from 'react';

import But from '../../components/content/but/but'

import Butcontent from '../../components/content/butcotent/butcontent'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                 <But/>
                
                <Butcontent>
                home1111111111

                </Butcontent>
                
            </div>
         );
    }
}
 
export default Home;