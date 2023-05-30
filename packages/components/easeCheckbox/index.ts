/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-30 15:06:35
 * @LastEditors: 陈宇环
 * @Description:
 */
import easeCheckbox from '../../../src/components/BaseForm/components/BaseCheckbox'

easeCheckbox.install = function(Vue) {
  Vue.component(easeCheckbox.name, easeCheckbox)
}

export default easeCheckbox
