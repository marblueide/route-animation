import {createRouter,RouteRecordRaw,createWebHistory} from "vue-router"
import routes from '~pages'

export default createRouter({
  routes,
  history: createWebHistory()
})