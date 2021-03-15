import axios from 'axios'
import {message} from 'antd'

// //封装一个promise方法
export default function ajax(url,data = {},type='GET'){
    let promise
    return new Promise((resolve,reject)=>{
        if(type === 'GET'){
            promise=axios.get(url,{
                params:data
            })
        }else{
            promise = axios.post(url,data)
        }
        promise.then(response => {
            //成功时的回调
            resolve(response.data)
            //失败时候的回调 如果失败了 不用调reject(reason) 而是提示异常提醒
        }).catch(error=>{
            // reject (error)
            message.error('请求出错了:' + error.message)
        })
    })
}

