import React, { Component  } from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import StorageUtil from '../../tools/storageUtil';
import Productt from '../../components/product/Product'
import Headerr from '../../components/header/Header'
import Contentt from '../../components/content/Content'
import Footerr from '../../components/footer/Footer'


import Productr from '../productr/productr'
import Strain from '../productr/strain'
import Category from '../category/category'
import Home from '../home/home'
import Role from '../role/role'
import Authority from '../role/authority'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
   
    render() { 
        const user =StorageUtil.getUser()
        console.log(user);
        if(!user || !user._id){ //如果登陆了 就跳到'/'页面
            return <Redirect to='/Login'/>
        }
        return ( 
            <div>
            <Layout style={{ minHeight: '100vh' }}>
              <Productt></Productt>
                <Layout>
                   <Headerr/>
                    <Contentt >
                    {/* <Redirect to='/home' from='/'/> */}
                      <Switch>
                      <Redirect to="/home" exact from="/" />
                        <Route path='/category' component={Category}/>
                        {/* <Route path='/productr' component={Productr}/> */}
                        <Route path='/productr/productr' component={Productr}/>
                        <Route path='/productr/strain' component={Strain}/>

                        <Route path='/home' component={Home}/>
                        <Route path='/role/role' component={Role}/>
                        <Route path='/role/authority' component={Authority}/>
                        <Route path='/user' component={User}/>
                        <Route path='/charts/bar' component={Bar}/>
                        <Route path='/charts/line' component={Line}/>
                        <Route path='/charts/pie' component={Pie}/>
                      </Switch>                      
                    </Contentt>
                    <Footerr/>
                </Layout>`
            </Layout>
            </div>
         );
    }
}
 
export default Admin;