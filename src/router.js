import { createRouter, createWebHistory } from "vue-router";

const ChoiceSelector = () => import("./pages/ChoiceSelector/Index.vue");
const AddUser = () => import("./pages/Login/AddUser.vue");

const routes = [
  {
    path: "/",
    component: ChoiceSelector,
    name: "choice.selector",
  },
  {
    path: "/user/add",
    component: AddUser,
    name: "user.add",
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
