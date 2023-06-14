/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-26 11:49:07
 * @LastEditors: 陈宇环
 * @Description:
 */
import easeSelect from '../../../src/components/BaseForm/components/BaseSelect'

easeSelect.install = function(Vue) {
  Vue.component(easeSelect.name, easeSelect)
}

export default easeSelect
