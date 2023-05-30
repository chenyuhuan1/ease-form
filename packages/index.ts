import easeForm from './components/easeForm'
import easeCascader from './components/easeCascader'
import easeCheckbox from './components/easeCheckbox'
import easeDate from './components/easeDate'
import easeDateRange from './components/easeDateRange'
import easeInput from './components/easeInput'
import easeNumber from './components/easeNumber'
import easeNumberRange from './components/easeNumberRange'
import easeRadio from './components/easeRadio'
import easeSelect from './components/easeSelect'
import easeSwitch from './components/easeSwitch'
import easeText from './components/easeText'
import easeTable from './components/easeTable'
import easeButtons from './components/easeButtons'
const components = [
  easeForm,
  easeCascader,
  easeCheckbox,
  easeDate,
  easeDateRange,
  easeInput,
  easeNumber,
  easeNumberRange,
  easeRadio,
  easeSelect,
  easeSwitch,
  easeText,
  easeTable,
  easeButtons,
] // 组件集合
const install = function(Vue) {
  // 注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
// 如果是直接引入文件,就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// export default {
//   install,
//   easeForm,
//   easeCascader,
//   easeCheckbox,
//   easeDate,
//   easeDateRange,
//   easeInput,
//   easeNumber,
//   easeNumberRange,
//   easeRadio,
//   easeSelect,
//   easeSwitch,
//   easeText,
//   easeTable,
//   easeButtons,
// } // 必须要有导出

export default install