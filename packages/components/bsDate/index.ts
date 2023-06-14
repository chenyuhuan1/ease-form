/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-26 11:48:41
 * @LastEditors: 陈宇环
 * @Description:
 */
import BsDate from '../../../src/components/BaseForm/components/BaseDate'

BsDate.install = function(Vue) {
  Vue.component(BsDate.name, BsDate)
}

export default BsDate
