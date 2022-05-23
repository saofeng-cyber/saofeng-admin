import { App } from 'vue';
import { defineStore } from 'pinia'
import { StoreName } from './store-name';

const UseSession = defineStore(StoreName.MAIN, {
    state: () => {
        return {
            session: window.localStorage.getItem("token"),
            is_show: false
        }
    },
    getters: {

    },
    actions: {
        getSession() { this.session = window.localStorage.getItem("token") },
        setSession(password: string) {
            window.localStorage.setItem("token", password)
        },
        setShow() {
            this.is_show = !this.is_show
        }
    }
})
export { UseSession }