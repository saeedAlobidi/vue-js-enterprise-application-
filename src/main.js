/* package  import  */
import Vue from 'vue'
import App from './App.vue'
import VueI18n from "vue-i18n";
import router from './router'
import store from '@/infrastructure/store'
import services from '@/infrastructure/services'
import myPlugin from './Plugin/myPlugin';
import 'nprogress/nprogress.css'
import messages from "../src/assets/locales"
Vue.config.productionTip = false
/* end package  import  */

// add custom plugin
Vue.use(MyPlugin);

/* start localiztionation */
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: messages['en'],
  messages
})
/* end global error handler  */



/* start global error handler  */
Vue.config.errorHandler =  (err, vm, info)=> services.log(err, 'glouble error handler')
/* end  global error handler  */

 

let vue=new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  })
  .$mount('#app')

  export const bus =vue;