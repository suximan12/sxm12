import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Nav from "./views/Nav.vue"
import Card from "./views/Card.vue";
import Center from "./views/Center.vue"
// 路由懒加载
// const About = () => import("./views/About.vue");
import About from "./views/About.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "Card",
      component: Card,
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/card",
      namr: "card",
      component: Card
    },
    {
      path: "/center",
      namr: "center",
      component: Center
    }
  ]
});
