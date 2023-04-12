import { createRouter, createWebHistory } from "vue-router";
import CreateMember from "../components/Create/CreateMember.vue";
import Members from "../components/Create/Members.vue";
import Dashboard from "../views/Dashboard.vue"
import CatelogList from "../components/Catelog/CatelogList.vue"
import NewCatelog from "../components/CreatNew/NewCatelog.vue"
import NewMember from "../components/CreatNew/NewMember.vue"
import NewOrder from "../components/CreatNew/NewOrder.vue"
import Order from "../components/Order/Order.vue"
import Archived from "../components/Archived/Archived.vue"
import Notification from "../components/Notification/Notification.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/createMember",
      name: "createMember",
      component: CreateMember,
    },
    {
      path: "/members",
      name: "members",
      component: Members,
    },
    {
      path: "/cateloglist",
      name: "cateloglist",
      component: CatelogList,
    },
    {
      path: "/NewCatelog",
      name: "NewCatelog",
      component: NewCatelog,
    },
    {
      path: "/NewMember",
      name: "NewMember",
      component: NewMember,
    },
    {
      path: "/NewOrder",
      name: "NewOrder",
      component: NewOrder,
    },
    {
      path: "/Order",
      name: "Order",
      component: Order,
    },
    {
      path: "/Archived",
      name: "Archived",
      component: Archived,
    },
    {
      path: "/Notification",
      name: "Notification",
      component: Notification,
    },
   
  ],
});

export default router;
