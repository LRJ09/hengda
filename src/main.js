import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(ElementUI)
import axios from 'axios'
axios.defaults.baseURL="http://localhost:3000"
Vue.prototype.axios=axios;
Vue.config.productionTip = false
// Vue.component('my-header',Header)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
