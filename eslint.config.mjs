import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({})
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  })
