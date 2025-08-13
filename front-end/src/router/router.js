import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/User/Login.vue";
import Layout from "../Layouts/Layout.vue";
import Register from "../components/User/Register.vue";
import { useLocalStorage } from "@vueuse/core";
import DashboardLayout from "../Layouts/DashboardLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: Layout,
      loader: () => {},
      children: [
        {
          path: "/register",
          component: Register,
        },
        {
          path: "/login",
          component: Login,
        },
      ],
    },

    {
      path: "/dashboard",
      component: DashboardLayout,
    },
  ],
});

export default router;
