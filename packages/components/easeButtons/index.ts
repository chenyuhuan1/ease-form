/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:51:59
 * @LastEditTime: 2023-05-26 11:52:54
 * @LastEditors: 陈宇环
 * @Description:
 */
import easeButtons from '../../../src/components/BaseButtons/index'

easeButtons.install = function(Vue) {
  Vue.component(easeButtons.name, easeButtons)
}

export default easeButtons
