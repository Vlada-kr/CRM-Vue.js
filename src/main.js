import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filters'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyDT139N_14WYEEhNQijJ49c2g0RRtt0VuI",
  authDomain: "vue-crm-krasovitova.firebaseapp.com",
  databaseURL: "https://vue-crm-krasovitova.firebaseio.com",
  projectId: "vue-crm-krasovitova",
  storageBucket: "vue-crm-krasovitova.appspot.com",
  messagingSenderId: "962006793162",
  appId: "1:962006793162:web:8829737f909fb07eb5ed33",
  measurementId: "G-HX0YB6NKLT"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


