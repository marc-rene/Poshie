import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'



import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'

let app
onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
})

createApp(App).use(router).mount('#app')
