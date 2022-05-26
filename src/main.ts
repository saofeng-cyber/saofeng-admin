import { createApp } from 'vue'
import { useRouter } from "./route"
import { createPinia } from 'pinia';
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import i18n from "@/i18n/index"
import App from './App.vue'

const app = createApp(App)
// app.config.globalProperties.$echarts = echarts
const pinia = createPinia()
useRouter(app)
app.use(ElementPlus).use(pinia).use(i18n).mount('#app')
