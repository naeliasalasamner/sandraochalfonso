import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// ✅ Importera texterna från filer
import en from './locales/en'
import es from './locales/es' // om du har en es.ts

const i18n = createI18n({
  legacy: false,
  globalInjection: true,   // 👈 viktigt när du använder $t i templates
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
