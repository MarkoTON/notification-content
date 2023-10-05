import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

// Dodajte ikonice koje želite koristiti u biblioteku
library.add(faEnvelope, faBell, faUserSecret);

// Registrujte komponentu FontAwesomeIcon globalno
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
