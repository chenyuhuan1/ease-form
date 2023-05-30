/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-26 11:48:41
 * @LastEditors: 陈宇环
 * @Description:
 */
import easeDate from '../../../src/components/BaseForm/components/BaseDate'

easeDate.install = function(Vue) {
  Vue.component(easeDate.name, easeDate)
}

export default easeDate
