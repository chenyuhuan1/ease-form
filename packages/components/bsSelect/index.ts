/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-05-26 11:49:07
 * @LastEditors: 陈宇环
 * @Description:
 */
import BsSelect from '../../../src/components/BaseForm/components/BaseSelect'

BsSelect.install = function(Vue) {
  Vue.component(BsSelect.name, BsSelect)
}

export default BsSelect
