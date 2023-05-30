import easeTable from '../../../src/components/BaseTable/index'

easeTable.install = function(Vue) {
  Vue.component(easeTable.name, easeTable)
}

export default easeTable
