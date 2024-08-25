// myPlugin.js
export default {
    install(Vue, options) {
      // Adding a global method
      Vue.prototype.$myMethod = function (methodOptions) {
        console.log('My custom plugin method! ^_^', methodOptions);
      }
    }
  }
  