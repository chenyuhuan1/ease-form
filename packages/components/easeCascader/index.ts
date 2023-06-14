/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-26 11:48:41
 * @LastEditors: 陈宇环
 * @Description:
 */
import easeCascader from '../../../src/components/BaseForm/components/BaseCascader'

easeCascader.install = function(Vue) {
  Vue.component(easeCascader.name, easeCascader)
}

export default easeCascader
