import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { plugin } from '@formkit/vue'
import formKitConfig from './formkitConfig'

createApp(App).use(plugin, formKitConfig).mount('#app')
