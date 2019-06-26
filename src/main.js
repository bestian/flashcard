import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
require('semantic-ui-css/semantic.css')

Vue.config.productionTip = false

new Vue({
  i18n: {
      fallbackLocale: 'zh-TW'
  },
  render: h => h(App),
}).$mount('#app')
