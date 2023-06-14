/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-26 11:49:24
 * @LastEditors: 陈宇环
 * @Description:
 */
import easeSwitch from '../../../src/components/BaseForm/components/BaseSwitch'

easeSwitch.install = function(Vue) {
  Vue.component(easeSwitch.name, easeSwitch)
}

export default easeSwitch
