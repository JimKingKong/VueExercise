import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/Profile');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },{
      path:'/profile',
      component:Profile
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart
    }
  ]
})
