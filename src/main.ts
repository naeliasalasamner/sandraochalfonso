import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// Ladda JSON-filerna
const messages = {
  en: await fetch('/locales/en.json').then(r => r.json()),
  es: await fetch('/locales/es.json').then(r => r.json()),
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',          
  fallbackLocale: 'en',
  messages: messages  // ← DETTA SAKNADES!
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
