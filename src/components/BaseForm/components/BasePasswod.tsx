/*
 * @Author: 陈宇环
 * @Date: 2023-03-24 14:01:06
 * @LastEditTime: 2023-06-06 11:33:56
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import styles from '@/components/BaseForm/style.module.scss'
import { passwordProps } from '../interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'

export default defineComponent({
  name: 'EasePasswod',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    config: {
      type: Object as PropType<passwordProps>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit }) {
    const { dynamicPassword } = new CustomDynamicComponent()
    function updateValue(value: number | string | InputEvent) {
      let cloneValue = value

      // ant-Design-vue 无input事件，value获取到的是原生input事件的e
      if (window.uiLanguage === CustomDynamicComponent.antLanguage) {
        cloneValue = ((value as InputEvent).target as HTMLInputElement).value
      }

      emit('update:modelValue', cloneValue)
      emit('change', {
        props: props.config.prop,
        value: cloneValue,
      })
    }
    return () => {
      return <div class={['basePassword', styles.width100]}>
        <dynamicPassword
          class="password"
          type='password'
          model-value={props.modelValue}
          placeholder={props.config.placeholder || `请输入${props.config.label}`}
          disabled={!!props.config.disabled}
          autocomplete="on"

          /** ant-design-vue && ele 统一封装 - start */
          clearable={props.config.clearable !== false}  // ele 特有属性 - 清除按钮
          allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
          show-password={props.config.showPassword} // ele 特有属性 - 是否显隐密码切换按钮
          visibilityToggle={props.config.showPassword} // ant-design-vue特有属性 - 是否显隐密码切换按钮
          /** ant-design-vue && ele 统一封装 - end */

          {...props.config.nativeProps}
          onInput={updateValue}
        />
      </div>
    }
  },
})