import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/internal/services/router'
import '@/exports/services/config/colors.css'
import '@/exports/services/config/sizes.css'
import '@/exports/services/config/fonts.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
