import './assets/style.css'

import { createApp } from 'vue'
import TOAST from "vue-toastification";
import 'vue-toastification/dist/index.css'
import App from './App.vue'

const app =createApp(App)
app.use(TOAST)
app.mount('#app')
