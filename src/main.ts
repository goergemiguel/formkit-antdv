import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { plugin } from '@formkit/vue'
import formKitConfig from '../lib/config'

createApp(App).use(plugin, formKitConfig).mount('#app')
