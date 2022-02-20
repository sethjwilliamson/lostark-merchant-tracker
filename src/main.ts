import Vue from 'vue'
import App from './App.vue'

import relativeTime from 'dayjs/plugin/relativeTime'
import duration from 'dayjs/plugin/duration'
import weekday from 'dayjs/plugin/weekday'
import localizedFormat from 'dayjs/plugin/localizedFormat'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
