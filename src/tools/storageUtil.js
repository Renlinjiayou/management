//store.js 提供非常简洁的 API 来实现跨浏览器的本地存储功能
import store from 'store'
const USER_KEY='user_key'
export default{
    saveUser(user){ //保存用户
        store.set(USER_KEY,user)
    },
    getUser(){ //获取用户
        return store.get(USER_KEY) ||{}
    },
    removeUser(){ //移出用户
        store.remove(USER_KEY)
    }
}