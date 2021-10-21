import { createApp } from "vue";
import { registerSW } from 'virtual:pwa-register'

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "./index.scss";

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");

const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
})