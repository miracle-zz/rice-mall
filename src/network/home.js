import { request } from './request'

export function getProductList (categoryId, pageSize) {
  return request({
    url: '/products',
    params: {
      categoryId,
      pageSize
    },
    method: 'get'
  })
}

export function addCart (productId) {
  return request({
    url: '/carts',
    params: {
      productId,
      selected: true
    },
    method: 'post'
  })
}
