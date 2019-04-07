import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import vSelect from 'vue-select'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)
Vue.component('v-select', vSelect)

Vue.config.productionTip = false
window.$ = window.jQuery = require('jquery');

  new Vue({
    render: h => h(App),
    store,
  }).$mount('#app')
