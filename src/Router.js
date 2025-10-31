import DepartamentosComponent from '@/components/DepartamentosComponent.vue';
import { createWebHistory,createRouter } from 'vue-router';

const myRoutes = [
    { path:"/", component:DepartamentosComponent}
]
const router = createRouter({
    history:createWebHistory(),
    routes: myRoutes
})
export default router;