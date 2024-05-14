import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// 方式二、定义特性标志
// window.__VUE_PROD_DEVTOOLS__ = false;
// window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')

// createApp(App).use(router).mount('#app')
