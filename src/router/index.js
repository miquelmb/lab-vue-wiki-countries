// src/router.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { 
    // nos hemos cargado el objeto inicial y apuntamos directamente a la lista de países. Así lo vemos como primera
    // instancia de nuestra web.
    path: "/",
    name: "list",
    component: () => import("../components/CountriesList.vue"),
      // nos permite crear subrutas dentro del proyecto, para que el usuario vaya en la url bar y escriba cosas
      // simples tipo web.com/padre/hijo.
    children: [
      {
        path: "/list/:alpha3Code",
        name: "details",
        component: () => import("../components/CountriesDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;


// EL QUE TENIEM ABANS
// const router = createRouter({
//   history: createWebHistory(import.meta.env.VITE_APP_ENV),
//   routes,
// });