import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import VueNativeSock from 'vue-native-websocket'
Vue.use(VueNativeSock, 'ws://localhost:8080/api')

Vue.config.productionTip = false;

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:3000',
//   vuex: {
//     store,
//     actionPrefix: "SOCKET_",
//   }
// }));

//const socket = io('http://127.0.0.1:8080');

// Vue.use(VueNativeSock, 'ws://localhost:3000')

// {
// // store: store,
//  reconnection: true, // (Boolean) whether to reconnect automatically (false)
//  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
//  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
// }


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
