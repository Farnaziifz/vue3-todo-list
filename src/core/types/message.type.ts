
export type messageProps = {
  type: 'success' | 'error' | 'warning' | 'loading' | 'info'
  messageKey?: string | number
  content: string
  show?: boolean
}
