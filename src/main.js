import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('apps', require('./App.vue').default);

window.Vue = Vue;

new Vue({
}).$mount('#app')
