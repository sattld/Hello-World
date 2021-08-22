const routes = [
    {
      path: '/',
      name: 'login',
      component: ()=>import('@/pages/login'),
      meta:{
        list:false,
        text:'登录'
      }
      
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/pages/register'),
      meta:{
        list:false,
        text:'注册'
      }

    },
    {
      path: '/map',
      name: 'map',
      component: ()=>import('@/pages/map'),
      meta:{
        list:true,
        text:'地图'
      }
      
    },
    {
        path: '/home',
        name: 'home',
        component: ()=>import('@/pages/home'),
        meta:{
            list:false,
            text:'首页导航'
        }
        
      },
      {
        path: '/upload',
        name: 'upload',
        component: ()=>import('@/pages/upload'),
        meta:{
            list:true,
            text:'文件上传'
        }
        
      },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]

  export default routes