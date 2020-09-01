//使用qs将请求从参数转化位字符串
// 1.

// import qs from"qs";

// export default function({ $axios, redirect }){

// $axios.onRequest(config=>{

//     config.data = qs.stringify(config.data, {

//         allowDots:true

//     });

//         returnconfig;

//   });

// $axios.onResponse(response=>{

//     returnPromise.resolve(response.data);

//   });

// $axios.onError(error=>{

//     returnPromise.reject(error);

//   });

// }

// 2.
// import qs from "qs";
// export default function({ $axios, redirect }) {
//   $axios.onRequest(config => {
//     config.data = qs.stringify(config.data, {
//       allowDots: true //Option allowDots can be used to enable dot notation
//     });
//     return config;
//   });
 
//   $axios.onResponse(response => {
//     return Promise.resolve(response.data);
//   });
 
//   $axios.onError(error => {
//     return Promise.reject(error);
//   });
// }

// 3.
import Qs from 'qs';
 
export default function (app) {
    let axios = app.$axios; 
    // 基本配置
    axios.defaults.timeout = 10000;
    axios.defaults.method = 'post';
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
    axios.defaults.transformRequest = [function (data) {
        data = Qs.stringify(data)
        return data
    }],
    
    // 请求回调
    axios.onRequest(config => {})
    
    // 返回回调
    axios.onResponse(res => {})
    
    // 错误回调
    axios.onError(error => {})
}