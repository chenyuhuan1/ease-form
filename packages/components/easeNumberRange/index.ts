/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-30 15:06:54
 * @LastEditors: 陈宇环
 * @Description:
 */
import easeNumberRange from '../../../src/components/BaseForm/components/BaseNumberRange'

easeNumberRange.install = function(Vue) {
  Vue.component(easeNumberRange.name, easeNumberRange)
}

export default easeNumberRange
