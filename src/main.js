import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global styles
import './assets/main.css'

import store from './store/index'
import './assets/tailwind.css'

createApp(App).use(router).use(store).mount('#app')