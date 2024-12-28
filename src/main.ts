import { createApp } from 'vue'
// import './style.css'
// 引入 pinia
import { createPinia } from 'pinia'

import App from './App.vue'
// 创建 pinia
const pinia = createPinia()
// 安装pinia
createApp(App).use(pinia).mount('#app')
