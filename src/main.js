import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // eslint-disable-next-line
  render: h => ( 
    <App>
      <h3 slot="header">Superman</h3>
    </App>
  ) 
}).$mount('#app')
