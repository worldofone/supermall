import { request } from './request'

// 将首页需要的数据，在该文件里进行请求，
export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })
}

export function getHomeDateGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}