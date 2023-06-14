/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 15:27:55
 * @LastEditTime: 2023-06-13 09:55:01
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType, ref, watch } from 'vue'
import styles from '@/components/BaseForm/style.module.scss'
import { numberRangeProps } from '../interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'

export default defineComponent({
  name: 'BsNumberRange',
  props: {
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    propEnd: {
      type: [String, Number],
      default: undefined,
    },
    config: {
      type: Object as PropType<numberRangeProps>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'update:propEnd', 'change'],
  setup(props: any, { emit }) {
    const { dynamicNumber } = new CustomDynamicComponent()
    const cloneModelValue = ref<any>('')
    watch(() => props.modelValue, () => {
      cloneModelValue.value = props.modelValue
    }, { immediate: true })
    function updateValue(value: number | string) {
      emit('update:modelValue', value)
      emit('change', {
        props: props.config.prop,
        value,
      })
    }

    const clonePropEnd = ref<any>('')
    watch(() => props.propEnd, () => {
      clonePropEnd.value = props.propEnd
    }, { immediate: true })
    function updateEndValue(value: number | string) {

      emit('update:propEnd', value)
      emit('change', {
        props: props.config.propEnd,
        value,
      })
    }
    return () => {
      return <div class={['BaseNumberRange', styles.width100, styles.BaseNumberRange]}>
        <dynamicNumber
          style={{ width: '100%' }}
          v-model={cloneModelValue.value}
          class={['inputNumber', props.config.controls !== true ? styles.noControls : null]}
          placeholder={props.config.placeholderStart || props.config.placeholder || `请选择${props.config.label}`}
          disabled={!!props.config.disabled}
          controls={props.config.controls === true}
          {...props.config.nativeProps}
          onInput={updateValue}
        />
        <span style="padding: 0 5px;">~</span>
        <dynamicNumber
          style={{ width: '100%' }}
          v-model={clonePropEnd.value}
          class={['inputNumber', props.config.controls !== true ? styles.noControls : null]}
          placeholder={props.config.placeholderEnd || props.config.placeholder || `请选择${props.config.label}`}
          disabled={!!props.config.disabled}
          controls={props.config.controls === true}
          {...props.config.nativeProps}
          onInput={updateEndValue}
        />
      </div>
    }
  },
})