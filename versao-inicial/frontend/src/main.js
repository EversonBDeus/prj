
import 'font-awesome/css/font-awesome.css'/* import the fontawesome core */

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
library.add(faArrowRight,faArrowLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msgs'
Vue.config.productionTip = false


require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkV2ZXJzb24gRGV1cyIsImVtYWlsIjoiZXZlcnNvbkBob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2Nzk1MTUyNTQsImV4cCI6MTY3OTc3NDQ1NH0.9PnTdIbnp1H8-wagWfMaGPQc3kjLFNvEIi4JktG9n_w'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')