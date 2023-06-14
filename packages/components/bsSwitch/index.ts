/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-06-14 11:07:00
 * @LastEditors: 陈宇环
 * @Description:
 */
import BsSwitch from '../../../src/components/BaseForm/components/BaseSwitch'

BsSwitch.install = function(Vue) {
  Vue.component(BsSwitch.name, BsSwitch)
}

export default BsSwitch
