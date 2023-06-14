/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:51:59
 * @LastEditTime: 2023-06-14 11:06:15
 * @LastEditors: 陈宇环
 * @Description:
 */
import BsButtons from '../../../src/components/BaseButtons/index'

BsButtons.install = function(Vue) {
  Vue.component(BsButtons.name, BsButtons)
}

export default BsButtons
