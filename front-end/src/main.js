import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Layout from "./components/Layout.vue";
import Register from "./components/User/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: Layout,
      children: [
        {
          path: "/register",
          component: Register,
        },
      ],
    },
  ],
});

createApp(App).use(router).mount("#app");
