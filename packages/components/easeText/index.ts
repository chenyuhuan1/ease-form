/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-30 15:06:18
 * @LastEditors: 陈宇环
 * @Description:
 */
import easeText from '../../../src/components/BaseForm/components/BaseText'

easeText.install = function(Vue) {
  Vue.component(easeText.name, easeText)
}

export default easeText
