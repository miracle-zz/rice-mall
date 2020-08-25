import { request } from './request'

export function getProductList (categoryId) {
  return request({
    url: '/products',
    params: {
      categoryId
    },
    method: 'get'
  })
}
