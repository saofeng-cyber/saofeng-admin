import { App } from "vue"
import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router"
import { ElMessage } from "element-plus";
import NProgress from "@/utils/progress"
const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"/",
        component:()=>import('@/views/layout/Main.vue'),
        meta: {
            title: "主页",
            requireAuthorization: true
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/views/Login.vue'),
        meta: {
            title: "登录",
            requireAuthorization: false
        }
    },
    {
        path: "/:patchMatch(.*)*",
        name: "error",
        component: () => import('@/views/error/Mistake.vue'),
        meta: {
            title: "404 | 错误页面",
            requireAuthorization: true
        }
    }
]
const router: Router = createRouter({
    history: createWebHistory(),
    routes: routes,
    strict: true,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string
    NProgress.start();
    if (to.meta.requireAuthorization) {
        if (window.localStorage.getItem("token") != null) {
            next()
        }
        else {
            ElMessage({
                message: "请先登录",
                type: "warning",
                showClose: true,
            });
            setTimeout(() => {
                next("/login")
            }, 500);
        }
    } else {
        next()
    }
})
router.afterEach(() => {
    NProgress.done()
})
export const useRouter = (app: App<Element>) => {
    app.use(router)
}