import { createRouter, createWebHistory } from "vue-router";

// 路由

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import('../components/Login.vue'),
  },
  {
    path: "/new",
    name: "new",
    component: () => import('../components/New.vue'),
  },
  {
    path: "/home",
    name: "home",
    component: () => import('../components/Home.vue'),
  }
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;