import easeForm from '../../../src/components/BaseForm/index'

easeForm.install = function(Vue) {
  Vue.component(easeForm.name, easeForm)
}

export default easeForm
