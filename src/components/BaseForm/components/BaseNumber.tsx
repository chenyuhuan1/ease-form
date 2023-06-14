/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 15:19:17
 * @LastEditTime: 2023-06-06 11:37:35
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import styles from '@/components/BaseForm/style.module.scss'
import { numberProps } from '../interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'

export default defineComponent({
  name: 'EaseNumber',
  props: {
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    config: {
      type: Object as PropType<numberProps>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit }) {
    const { dynamicNumber } = new CustomDynamicComponent()
    function updateValue(value: number | string | InputEvent) {
      emit('update:modelValue', value)
      emit('change', {
        props: props.config.prop,
        value,
      })
    }
    return () => {
      return <div class={['baseNumber', styles.width100, styles.BaseNumber]}>
        <dynamicNumber
          style={{ width: '100%' }}
          class={{ number: true, textLeft: props.config.controls !== true }}
          model-value={props.modelValue}
          placeholder={props.config.placeholder || `请输入${props.config.label}`}
          disabled={!!props.config.disabled}
          controls={props.config.controls === true}
          {...props.config.nativeProps}
          onInput={updateValue}
        />
      </div>
    }
  },
})