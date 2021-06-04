import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/domain/store'
import services from '@/domain/services'
import 'nprogress/nprogress.css'
 Vue.config.productionTip = false

 Vue.config.errorHandler = function (err, vm, info) {
   console.log(services)
  services.log(err,'glouble error handler')
}

 new Vue({
   router,
  store,
  render: h => h(App)
})
.$mount('#app')
 
