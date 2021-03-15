//主要作用设置动态路由


const menuList= [
    {
        title:'首页', //导航栏名称
        key:'/home',  // 对应的路由 path值
        icon:'smile',  //图标名称
        isPublic:true,  // 为true为公开
    },
    {
        title:'用户管理',
        key:'/category',
        icon:'user',
        isPublic:true,
    },
    {
        title:'商品管理',
        key:'/productr',
        icon:'taobao',
       
        children:[   //在这里写子路由
            {
                title:'商品1',
                key:'/productr/productr',
                icon:'taobao',
                   
            },
            {
                title:'商品2',
                key:'/productr/strain',
                icon:'taobao',  
                  
            },
        ]   
    },
    {
        title:'角色管理',
        key:'/role',
        icon:'team',
        children:[
            {
                title:'角色1',
                key:'/role/role',
                icon:'team',  
            },
            {
                title:'角色2',
                key:'/role/authority',
                icon:'team',  
            },
        ]   
    },
    {
        title:'图形管理',
        key:'/charts',
        icon:'pie-chart',
        children:[
            {
                title:'图形1',
                key:'/charts/bar',
                icon:'pie-chart',  
            },
            {
                title:'图形2',
                key:'/charts/line',
                icon:'pie-chart',  
            },
            {
                title:'图形2',
                key:'/charts/pie',
                icon:'pie-chart',  
            },
        ]   
    },
    // {
    //     title:'订单',
    //     keu:'/charts',
    //     icon:'file',
    //     children:[
    //         {
    //             title:'图形1',
    //             keu:'/bar',
    //             icon:'file',  
    //         },
    //         {
    //             title:'图形2',
    //             keu:'/line',
    //             icon:'file',  
    //         },
    //         {
    //             title:'图形2',
    //             keu:'/pie',
    //             icon:'file',  
    //         },
    //     ]   
    // }








]

export default menuList