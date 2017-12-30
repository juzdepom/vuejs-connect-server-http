import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  //put replaces data in firebase, whereas post adds the data
  if(request.method == "POST"){
    request.method = "PUT";
  }
  next(response => {
    response.json = () => {
      return {messages: response.body}
    }
  });
});

Vue.http.options.root = 'https://vuejs-http-a2c8e.firebaseio.com/data.json';

new Vue({
  el: '#app',
  render: h => h(App)
})
