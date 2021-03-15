import React, { Component } from 'react';
import {Redirect,Link,withRouter} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';

import menuList from '../../config/menuConfig'

import './product.css'
import Item from 'antd/lib/list/Item';








const { Sider } = Layout;
const { SubMenu } = Menu;

class Productt extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapsed: false,
         }
    }
    //需要在 render 之前执行一下
    componentWillMount(){
        this.menunodes=this.getMenuNode_map(menuList)
    }

    //递归调用menuList里的数据 动态显示 做的是侧边栏
    getMenuNode_map=(menuList)=>{
        //class 里面包含location history match 三大对象(比较常用的)
        const path = this.props.location.pathname
        console.log(path);
        return menuList.map((item)=>{
           
            if (!item.children){
                return(
                <Menu.Item key={item.key}>
                    <Link to={item.key}>
                        <Icon type={item.icon}  />
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
                );
            }else{
                //说明有子路由
                //查找当前路径下匹配的子路由Item
                const cItem=item.children.find(
                    (cItem)=>path.indexOf(cItem.key)===0//cItem是地址栏里的cItem.key
                );//=0 说明存在 如果存在 就this.openkey=item.key;(当前路径需要打开)
                if(cItem){
                    this.openkey=item.key;
                }
               return(
                <SubMenu
                key={item.key}
                title={
                    <span>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                    </span>
                }
            >
                {/* 递归调用下自己 */}
                {this.getMenuNode_map(item.children)}
            </SubMenu>
               ) 
            }
            
        })
    }
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() { 
        const path = this.props.location.pathname
        const openkey=this.openkey
        return ( 
          
              <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
               <div className="logo" style={{ minHeight: 40}}><span className="logo-span" >任林的后台管理</span></div>
                <Menu
                selectedKeys={[path]} //表单里提供的方法
                defaultOpenKeys={[openkey]}
                theme="dark" 
                // defaultSelectedKeys={['1']} 
                mode="inline" 
                >
                    {/* <Menu.Item key="1">
                        <Link to='/home'>
                            <Icon type="smile" theme="twoTone" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/category'>
                            <Icon type="user" />
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="taobao" />
                            <span>商品管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">
                            <Link to='/productr/productr'>
                            <Icon type="taobao" />
                            商品1
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to='/productr/strain'>
                            <Icon type="taobao" />
                            商品2
                            </Link>
                            </Menu.Item>
                   
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    title={
                        <span>
                        <Icon type="team" />
                        <span>角色管理</span>
                        </span>
                    }
                    >
                    <Menu.Item key="6">
                        <Link to='/role/role'>
                        Team 1
                        </Link>
                        </Menu.Item>
                    <Menu.Item key="8">
                        <Link to='/role/authority'>
                        Team 2
                        </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                    key="sub3"
                    title={
                        <span>
                       <Icon type="pie-chart" />
                        <span>图形管理</span>
                        </span>
                    }
                    >                  
                    <Menu.Item key="9">
                    <Link to='/charts/bar'>
                        图 1
                    </Link>
                        </Menu.Item>
                   
                    
                    <Menu.Item key="10">
                    <Link to='/charts/line'> 
                        图 2
                    </Link>  
                    </Menu.Item>
                   
                    
                    <Menu.Item key="11">
                    <Link to='/charts/pie'>
                        图 3
                    </Link>  
                        </Menu.Item>
                    
                    </SubMenu>
                    <SubMenu
                    key="sub4"
                    title={
                        <span>
                       <Icon type={"file"} />
                        <span>订单管理</span>
                        </span>
                    }
                    >
                    <Menu.Item key="12">Order1</Menu.Item>
                    <Menu.Item key="13">Order2</Menu.Item>
                    <Menu.Item key="14">Order3</Menu.Item>
                </SubMenu> */}
                {/* {this.getMenuNode_map(menuList)} 下面替换上面 */}
                {this.menunodes} 
                </Menu>
              </Sider>  
           
         );
    }
}
 
export default withRouter(Productt);