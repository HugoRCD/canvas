import messages from './locales/messages'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: messages,
}))
