import Vue from "vue"
import VueRouter from "vue-router"

//使用路由懒加载
const Home = () => import('views/home/Home')
const Sort = () => import('views/sort/Sort')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/sort',
        component:Sort
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router