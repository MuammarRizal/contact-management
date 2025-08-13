import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/User/Login.vue";
import Layout from "../Layouts/Layout.vue";
import Register from "../components/User/Register.vue";
import DashboardLayout from "../Layouts/DashboardLayout.vue";
import ContactList from "../components/Dashboard/ContactList.vue";
import Profile from "../components/User/Profile.vue";

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
          path: "user/profile",
          component: Profile,
        },
      ],
    },
  ],
});

export default router;
