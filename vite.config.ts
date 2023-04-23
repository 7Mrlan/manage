import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// 自动按需引入组件
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver} from 'unplugin-vue-components/resolvers' 
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Components({
    // 指定组件所在文件夹的位置，默认是src/components
    dirs: ['src/components'],
    // ui库解析器
    resolvers: [ElementPlusResolver()],
    extensions: ['vue'],//文件扩展
    // 配置type文件生成位置
    dts: 'src/components.d.ts'
  })
],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    watch: {
      usePolling: true,
    }
  },
})
