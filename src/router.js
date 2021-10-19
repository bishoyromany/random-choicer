import { createRouter, createWebHistory } from "vue-router";

const ChoiceSelector = () => import("./pages/ChoiceSelector/Index.vue");

const routes = [
  {
    path: "/",
    component: ChoiceSelector,
    name: "choice.selector",
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

console.log(router);

export default router;
