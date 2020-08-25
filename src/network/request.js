import axios from 'axios'
// import { Message } from 'element-ui'

export function request (config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  // 2. axios的拦截器
  // instance.interceptors.request.use(req => {
  //   // console.log(req);
  //   return req
  // }, err => {
  //   // console.log(err);
  // })
  instance.interceptors.response.use(function (response) {
    const res = response.data
    if (res.status === 0) {
      return res.data
    } else {
      window.location.href = '/#/login'
      return Promise.reject(res)
    }
  }, (error) => {
    // const res = error.response
    // Message.error(res.data.message)
    return Promise.reject(error)
  })
  // // 2.2响应拦截
  // instance.interceptors.response.use(function (response) {
  //   const res = response.data
  //   if (res.status === 0) {
  //     return res.data
  //   } else if (res.status === 10) {
  //     window.location.href = '/#/login'
  //     return Promise.reject(res)
  //   } else {
  //     Message.warning(res.msg)
  //     return Promise.reject(res)
  //   }
  // }, (error) => {
  //   const res = error.response
  //   Message.error(res.data.message)
  //   return Promise.reject(error)
  // })
  //

  // 发送真正的网络请求
  return instance(config)
}
