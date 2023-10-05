import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faBell, faTimes } from '@fortawesome/free-solid-svg-icons';

// Dodajte ikonice koje želite koristiti u biblioteku
library.add(faEnvelope, faBell, faUserSecret, faTimes);

// Registrujte komponentu FontAwesomeIcon globalno
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.filter('textLimit30', val => {
  if (!val || typeof val !== 'string' || val.length <= 30) return val;
  return val.slice(0, 30) + '...';
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
