import { request } from '@/utils/request'


// 课程列表
export function getGoods(query) {
    return request('get', '/api/goods/v1/h5_goods/', query)
}
// 课程详情 - 章节
export function getGoodsInfo(id, query) {
    return request('get', `/api/goods/v1/h5_goods/${id}/`, query)
}
