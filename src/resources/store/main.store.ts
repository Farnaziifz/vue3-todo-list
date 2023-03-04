import { defineStore } from 'pinia'
import { messageProps } from '../../core/types/message.type'

type mainState = {
  message: messageProps
}
export const useMainStore = defineStore('main', {
  state: (): mainState => ({
    message: {
      show: false,
      content: ' ',
      type: 'info',
      messageKey: undefined,
    },
  }),
  actions: {
    setMessage(message: messageProps) {
      this.message = message
    },
    closeMessage() {
      this.message.show = false
    },
  },
})
