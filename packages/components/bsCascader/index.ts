/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-06-14 11:06:24
 * @LastEditors: 陈宇环
 * @Description:
 */
import BsCascader from '../../../src/components/BaseForm/components/BaseCascader'

BsCascader.install = function(Vue) {
  Vue.component(BsCascader.name, BsCascader)
}

export default BsCascader
