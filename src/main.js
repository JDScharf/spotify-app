import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Auth from './auth.js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  Auth,
  render: h => h(App)
}).$mount('#app')

