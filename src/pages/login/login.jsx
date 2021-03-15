import React, { Component } from 'react';
import { Form, Icon, Input, Button,message} from 'antd';
import {Redirect} from 'react-router-dom'
import Header from './header/header'
import {reqLogin} from '../../api'
import './login.css'
import StorageUtil from '../../tools/storageUtil';

class Login  extends Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const {username,password}=values;
            const result=await reqLogin(username,password);
            console.log(result);
            if(result.status===0){ //判断是否登录成功
                message.success('欢迎来到管理系统')//登录成功后提示
                const user=result.data;//把用户名密码 付给user
                StorageUtil.saveUser(user)//把用户名密码存起来
                this.props.history.replace('/')
                // replace:回不到上一级 适用于登录后，不需要重新回到登页面
            }

          }
        });
    };
    //表单验证
    validatePwd=(rule,value,callback)=>{
        console.log('validatePwd()',rule,value);
        if(!value){
            callback('密码必须输入');           
        }else if(value.length<4){
            callback('密码长度不能小于4位')
        }else if(value.length>12){
            callback('密码长度不能多于12位')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文，数字字母下划线组成')
        }else{
            callback()//验证通过
        }
    }
    
    render() { 

        //判断是否登录
        const user =StorageUtil.getUser()
        console.log(user);
        if(user&&user._id){ //如果登陆了 就跳到'/'页面
            return <Redirect to='/'/>
        }
        const { getFieldDecorator } = this.props.form; //从from表单实例中获取getFieldDecorator
        return ( 
            <div className="login-page">
               <Header/>
                <div className='login-content'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{
                                validator:this.validatePwd, 
                                // required: true, message: '请输入用户名!'
                            }],
                        })(
                            <Input
                            prefix={
                            <Icon type="lock" 
                            style={{ color: 'rgba(0,0,0,.25)' }} 
                            />}
                            type="password"
                            placeholder="密码"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        
                        <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button"
                        >
                            Log in
                        </Button>
                       
                        </Form.Item>
                    </Form>

               </div>
            </div>
         );
    }
}
 
export default Form.create()(Login);