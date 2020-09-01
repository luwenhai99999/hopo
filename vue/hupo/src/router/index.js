import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import details from '../views/details'
import login from '../views/login'
import person from '../views/person.vue'
import loginRegister from '../views/login-register'
import shopping from '../views/shopping'
import Search from '../components/search'
// import { Search } from 'vant'

Vue.use(VueRouter)

  const routes = [
  
    {
      path: '/shoppingcar',
      component: shopping,
      meta:{guard:true}
    },
    {
      path: '/person',
      component: person,
      meta:{
        guard:true
      }
      
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/loginRegister',
      component: loginRegister,
    },
    {
      path: '/details/:kid',
      component: details,
      props:true
    },
    {
      path: '/search',
      component: Search
    },
  {
    path: '/',
    name: 'Home',
    component: Home
   
   
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

//vue Uncaught Error: Redirected when going from “/*“ to “/*“ 路由报错
//配置此段代码可解决!报错问题! 或者在重新下载依赖包时，安装的vue-router还是之前出错的那个版本，解决方法也很简单，在项目目录下运行 npm i vue-router@3.0 -S 即可。
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const router = new VueRouter({
  routes,
 
})

export default router
