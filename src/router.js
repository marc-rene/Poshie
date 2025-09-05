import { createWebHistory, createRouter } from 'vue-router'
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
        component: LoginPage,
        meta: { guestOnly: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const getCurrentUser = () =>
    new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            auth,
            (user) => {
                removeListener()
                resolve(user)
            },
            reject,
        )
    })

router.beforeEach(async (to) => {
    // wait until firebase finishes checking user state
    const user = await getCurrentUser();

    if (to.meta.requiresAuth && !user) {
        console.info("Not logged in")
        return { path: "/login" }; // not logged in → yeet to login
    }

    else if (to.meta.guestOnly && user) {
        return { path: "/" }; // logged in but going login → yeet back
    }

    return true;
});




export default router