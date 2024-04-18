
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/router'
import axios from 'axios';
axios.defaults.timeout = 5000;
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false;
// axios.defaults.headers.common['token'] =  AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 允许跨域
axios.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*";

const app = createApp(App)
app.use(axios)
app.use(createPinia)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')
