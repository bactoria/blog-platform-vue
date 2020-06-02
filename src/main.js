import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { SET_AUTH_TOKEN } from './lib/api/apiClient'
import Const from './store/constant'

import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

const token = localStorage.getItem('jwt-token')

if (token) {
  store.commit(Const.AUTH_LOGIN)
  SET_AUTH_TOKEN(token)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
