/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-26 11:50:06
 * @LastEditors: 陈宇环
 * @Description:
 */
import easeDateRange from '../../../src/components/BaseForm/components/BaseDateRange'

easeDateRange.install = function(Vue) {
  Vue.component(easeDateRange.name, easeDateRange)
}

export default easeDateRange
