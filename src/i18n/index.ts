import { createI18n, I18n, I18nOptions } from "vue-i18n"
import { ZH } from "./zh"
import { EN } from "./en"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import en from "element-plus/es/locale/lang/en"


const getCurrentLanguage = () => {
    const UAlang = navigator.language
    const langCode = UAlang.includes("zh-CN") ? 'zh' : 'en'
    localStorage.setItem("lang", langCode)
    return langCode
}
const message = {
    en: {
        ...EN
    },
    zh: {
        ...ZH
    }
}
export default createI18n({
    legacy: false,
    locale: getCurrentLanguage() || 'zh',
    messages: message
})