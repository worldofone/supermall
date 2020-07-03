import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'http://152.136.185.210:8000/api/n3',
        timeout:5000
    })

    // 对请求进行拦截
    instance.interceptors.request.use(config => {
         //一般做什么业务
        /*
        1.config中的一些信息不符合服务器的要求
        2.每次发送网络请求，都希望在界面中显示一个请求的图标
        3.可以判断该用户是否是有效的token，每次网络请求会携带一些信息
        */ 
        return config //拦截之后需要放行
    },err =>{
        console.log(err);
    })
    // 对响应进行拦截
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err);
    })


    return instance(config) //返回instance单个实例也是promise对象
}