import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { plugin } from '@formkit/vue'
import formkitConfig from '../formkit.config.js'

createApp(App).use(plugin, formkitConfig).mount('#app')
