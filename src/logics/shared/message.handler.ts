import { messageProps } from '../../core/types/message.type'
import { useMainStore } from '../../resources/store/main.store'

export const showMessageToUser = (message: messageProps) => {
  const mainStore = useMainStore()
  message.show = true
  mainStore.setMessage(message)
}

export const showSuccessMessage = (text = 'Success', key = 1) => {
  showMessageToUser({
    content: text,
    messageKey: key,
    type: 'success',
  })
}

export const showErrorMessage = (text = 'Faild', key = 2) => {
  showMessageToUser({
    content: text,
    messageKey: key,
    type: 'error',
  })
}
