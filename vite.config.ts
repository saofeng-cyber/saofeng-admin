import { Alias, defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'

// 路径查找
const pathResolve = (dir: string): string => {
  return path.resolve(__dirname, dir);
};
const alias: Alias[] = [
  {
    find: "@",
    replacement: pathResolve("/src")
  }
]
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    proxy: {
      "/api": {
        target: 'http://localhost:8088',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
       * '@import "@/assets/scss/globalVariable1.scss";
       * @import"@/assets/scss/globalVariable2.scss";'
      **/
        additionalData: '@import url("/src/style/scss/index.scss");',
      }
    }
  },
})
