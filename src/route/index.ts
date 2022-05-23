import { App } from "vue"
import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router"
import { ElMessage } from "element-plus";
import NProgress from "@/utils/progress"
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "首页",
        redirect: "/analyis",
        component: () => import('@/views/layout/Main.vue'),
        meta: {
            title: "主页",
            requireAuthorization: true
        },
        children: [
            {
                path: "/analyis",
                name: "分析页",
                component: () => import("@/views/system/Analysis.vue"),
                meta: {
                    title: "分析页",
                    requireAuthorization: true
                },
            },
            {
                path: "/platform",
                name: "工作台",
                component: () => import("@/views/system/Platform.vue"),
                meta: {
                    title: "工作台",
                    requireAuthorization: true
                },
            },
            {
                path: "/error",
                name: "错误页面",
                component: () => import('@/views/error/Mistake.vue'),
                meta: {
                    title: "错误页面",
                    requireAuthorization: true
                },
            },
            {
                path: "/authority",
                name: "权限管理",
                component: () => import("@/views/system/Authority.vue"),
                meta: {
                    title: "权限管理",
                    requireAuthorization: true
                },
            },
            {
                path: "/system",
                name: "系统管理",
                component: () => import("@/views/system/System.vue"),
                meta: {
                    title: "系统管理",
                    requireAuthorization: true
                },
            },
            {
                path: "/about",
                name: "关于页面",
                component: () => import("@/views/system/About.vue"),
                meta: {
                    title: "关于页面",
                    requireAuthorization: true
                },
            },
        ]
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