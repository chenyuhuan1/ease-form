/*
 * @Author: 陈宇环
 * @Date: 2023-05-10 16:10:11
 * @LastEditTime: 2023-05-23 15:50:03
 * @LastEditors: 陈宇环
 * @Description: 按钮组件
 */

import { defineComponent, PropType, ref } from 'vue'
import { buttonFace } from './interface/index'
export default defineComponent({
  props: {
    buttons: {
      type: Array as PropType<buttonFace[]>,
      default() {
        return []
      },
    },
  },
  setup(props: any) {
    const loading = ref(false)
    return () => {
      const buttonDom = (button: buttonFace) => {
        return <el-button
          type={button.type ?? 'primary'}
          size={button.size ?? 'small'}
          disabled={button.disabled}
          loading={loading.value}
          {...button.nativeProps}
          onClick={async() => {
            loading.value = true
            !button.confirmConfig && button.click && await button.click()
            loading.value = false
          }}
        >
          {button.text ?? '文案'}
        </el-button>
      }
      return (
        <div style="display: flex">
          {
            props.buttons.map((button: buttonFace) => {
              if (button.show === false) {
                return null
              }
              if (button.confirmConfig && !button.disabled) {
                return <el-popconfirm
                  confirm-button-text="确认"
                  cancel-button-text="取消"
                  title={button?.confirmConfig?.title ?? '标题'}
                  onConfirm={() => {
                    if (button?.confirmConfig?.confirm) {
                      button?.confirmConfig?.confirm()
                    } else if (button.click) {
                      button?.click()
                    }
                  }}
                  onCancel={() => {
                    button?.confirmConfig?.cancel && button?.confirmConfig?.cancel()
                  }}
                  v-slots={{
                    reference: () => {
                      return buttonDom(button)
                    },
                  }}
                >
                </el-popconfirm>
              }
              return buttonDom(button)
            })
          }
        </div>
      )
    }
  },
})

export * from './interface/index'