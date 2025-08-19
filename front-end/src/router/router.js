import { createRouter, createWebHistory, useRouter } from "vue-router";
import Login from "../components/User/Login.vue";
import Layout from "../Layouts/Layout.vue";
import Register from "../components/User/Register.vue";
import DashboardLayout from "../Layouts/DashboardLayout.vue";
import ContactList from "../components/Dashboard/ContactList.vue";
import Profile from "../components/User/Profile.vue";
import UserLogout from "../components/User/UserLogout.vue";
import { useLocalStorage } from "@vueuse/core";
import ContactCreate from "../components/Dashboard/ContactCreate.vue";

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
      children: [
        {
          path: "contacts",
          component: ContactList,
        },
        {
          path: "contacts/create",
          component: ContactCreate,
        },
        {
          path: "user/profile",
          component: Profile,
        },
        {
          path: "user/logout",
          component: UserLogout,
        },
      ],
    },
  ],
});

export default router;
