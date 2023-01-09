import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import Favorite from "@/pages/Favorite";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/favorite',
        component: Favorite
    },
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: "active",
})

export default router;