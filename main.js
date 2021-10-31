import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import utils from 'utils/utils'
Vue.config.productionTip = false
import uView from "uview-ui"
Vue.use(uView);
App.mpType = 'app'
Vue.prototype.utils = utils
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'


export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif