/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-06-14 11:06:30
 * @LastEditors: 陈宇环
 * @Description:
 */
import BsCheckbox from '../../../src/components/BaseForm/components/BaseCheckbox'

BsCheckbox.install = function(Vue) {
  Vue.component(BsCheckbox.name, BsCheckbox)
}

export default BsCheckbox
