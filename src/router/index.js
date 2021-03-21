import Vue from 'vue'
import VueRouter from 'vue-router'
import ReadBooks from "../views/Read.vue"
import StoreBook from "../views/Store.vue"
import ViewBook from "../views/View.vue"
import UpdateBook from "../views/Update.vue"




Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "read",
    component: ReadBooks
  },
  {
    path: "/store",
    name: "store",
    component: StoreBook
  },
  {
    path: "/update/:id",
    name: "update",
    component: UpdateBook
  },
  {
    path: "/view/:id",
    name: "view",
    component: ViewBook
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
