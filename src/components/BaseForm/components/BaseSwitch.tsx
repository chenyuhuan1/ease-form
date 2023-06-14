/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 14:55:23
 * @LastEditTime: 2023-06-13 10:09:55
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import { switchProps } from '../interface/index'
import styles from '@/components/BaseForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'

export default defineComponent({
  name: 'EaseSwitch',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
    config: {
      type: Object as PropType<switchProps>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit }) {
    const { dynamicSwitch } = new CustomDynamicComponent()
    function updateValue(value: number | string | boolean): any {
      emit('update:modelValue', value)
      emit('change', {
        props: props.config.prop,
        value,
      })
    }
    return () => {
      return <div class={['BaseSwitch', styles.width100]}>
        <dynamicSwitch
          class="switch"
          /** ant-design-vue 特有属性-start */
          model-value={props.modelValue}
          /** ant-design-vue 特有属性-end */

          /** ele 特有属性-start */
          checked={props.modelValue}
          /** ele 特有属性-end */
          disabled={!!props.config.disabled}
          clearable={props.config.clearable !== false}
          {...props.config.nativeProps}
          onChange={updateValue}
        />
      </div>
    }
  },
})