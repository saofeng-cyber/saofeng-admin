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

const UseToken = defineStore(StoreName.TOKEN, {
    state: () => {
        return {
            token: "token"
        }
    },
    getters: {
        getStoken: (state) => {
            state.token = JSON.stringify(window.localStorage.getItem("token"))
            return state.token
        }
    },
    actions: {
        setToken(token: string) {
            window.localStorage.setItem("token", JSON.stringify(token));
            this.token = token
        }
    }
})
const UserInfo = defineStore(StoreName.USERINFO, {})
export { UseSession, UseToken, UserInfo }