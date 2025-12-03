import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// Importera JSON-filerna direkt från src/locales
import en from './locales/en.ts'
import es from './locales/es.ts'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
