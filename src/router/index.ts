import { createRouter, createWebHashHistory } from "vue-router"
const str01: string = "尝鲜派"

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('../views/home.vue'),
        meta: {
            title: str01 + " | " + "首页"
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, form, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router
