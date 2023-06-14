// import { defineAsyncComponent } from 'vue'
import { columnsBase } from '../interface/index'

import BaseInput from './BaseInput'
import BaseNumber  from './BaseNumber'
import BaseSelect from './BaseSelect'
import BaseRadio from './BaseRadio'
import BaseCheckbox from './BaseCheckbox'
import BaseDate from './BaseDate'
import BaseDateRange from './BaseDateRange'
import BaseNumberRange from './BaseNumberRange'
import BaseCascader from './BaseCascader'
import BaseSwitch from './BaseSwitch'
import BaseText from './BaseText'

// 组件注册
export const getComponentByType = (item: columnsBase): any => {
  switch (item.type) {
    case 'input':
    case 'textarea':
      return BaseInput
    case 'number':
      return BaseNumber
    case 'select':
      return BaseSelect
    case 'radio':
      return BaseRadio
    case 'checkbox':
      return BaseCheckbox
    case 'year':
    case 'month':
    case 'week':
    case 'date':
    case 'datetime':
    case 'dates':
      return BaseDate
    case 'yearRange':
    case 'monthRange':
    case 'dateRange':
    case 'weekRange':
    case 'datetimeRange':
      return BaseDateRange
    case 'numberRange':
      return BaseNumberRange
    case 'cascader':
      return BaseCascader
    case 'switch':
      return BaseSwitch
    case 'text':
      return BaseText
    default:
      return BaseInput
      // throw new Error('配置项控件${col.type}不存在')
  }
}
