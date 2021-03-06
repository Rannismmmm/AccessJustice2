import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/signin",
      name: "signin",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Signin.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Register.vue")
    },
    {
      path: "/mycourses",
      name: "mycourses",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/mycourses.vue")
    },
    {
      path: "/settings",
      name: "Settings",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Settings.vue")
    },
    {
      path: "/management",
      name: "management",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/management.vue")
    }
  ]
});
