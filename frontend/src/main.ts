import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueNativeSock from "vue-native-websocket";

const ws_url: string = (() => {
  const loc = window.location;
  let new_uri = "";
  if (loc.protocol === "https:") {
    new_uri = "wss:";
  } else {
    new_uri = "ws:";
  }
  new_uri += "//" + loc.host;
  new_uri += loc.pathname + "api";
  console.log({ new_uri });
  return new_uri;
})();

Vue.use(VueNativeSock, ws_url);

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
}).$mount("#app");
