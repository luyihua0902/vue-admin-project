import axios from "axios";
import { Message } from "element-ui";

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';
const service = axios.create({
    baseURL: BASEURL,  // http://192.168.0.106:8080/devApi/  == http://www.web-jshtml.cn/productapi/productapi
    timeout: 15000,   // 超时
    // 网络请求接口，假设 5000
    // 1000 2000，
});


//添加请求拦截器
service.interceptors.request.use(function(config)
{    
    //发送请求之间做什么
    console.log(config)
    // console.log('123344')
    return config;
},function(error){
    //请求错误做些什么
    return Promise.reject(error);
});



service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    
    //发送请求之间做什么
    // return response
    // console.log('55555555')
    let data=response.data
    if(data.resCode!==0){
        Message.error(data.message)
        return Promise.reject(data.message)
    }else{
        return response;
    }
    // console.log(data.message)
    // 业务需求

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default service;