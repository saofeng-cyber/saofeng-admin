import { createApp } from 'vue'
import { useRouter } from "./route"
import { createPinia } from 'pinia';
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import "./style/index.scss"
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
useRouter(app)
app.use(ElementPlus).use(pinia).mount('#app')
