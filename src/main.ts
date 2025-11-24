import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import es from './locales/es.json'
import sv from './locales/sv.json'

const i18n = createI18n({
  legacy: false,
  locale: 'sv',          
  fallbackLocale: 'en',  
  messages: { en, es, sv }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
