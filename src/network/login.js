import { request } from './request'
export function login1 (username, password) {
  return request({
    url: '/user/login',
    // post接收参数用的data不是proms
    data: {
      username,
      password
    },
    method: 'post'
  })
}

export function register (username, password, email) {
  return request({
    url: '/user/login',
    // post接收参数用的data不是proms
    data: {
      username,
      password,
      email
    },
    method: 'post'
  })
}
export function getUser () {
  return request({
    url: '/user',
    method: 'get'
  })
}

export function getCartCount () {
  return request({
    url: '/carts/products/sum',
    method: 'get'
  })
}
