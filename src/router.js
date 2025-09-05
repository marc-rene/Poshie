import { createMemoryHistory, createRouter } from 'vue-router'
import MainScreen from './Pages/MainScreen.vue'
import LoginPage from './Pages/LoginPage.vue'
import { auth } from './Firebase'
import { onAuthStateChanged } from 'firebase/auth';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainScreen,
        meta: { requiresAuth: true }
    },
    {
        path: '/login', 
        name: 'Login', 
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// GOOD
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next('/')
})

export default router