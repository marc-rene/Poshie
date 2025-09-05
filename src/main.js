import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'



import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'



createApp(App).use(router).mount('#app')
