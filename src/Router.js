import DepartamentosComponent from '@/components/DepartamentosComponent.vue';
import CreateDepartamento from '@/components/CreateDepartamento.vue';
import DetailsDepartamento from '@/components/DetailsDepartamento.vue';
import { createWebHistory,createRouter } from 'vue-router';

const myRoutes = [
    { path:"/", component:DepartamentosComponent},
    { path:"/createdepartamento", component:CreateDepartamento},
    { path:"/details/:id/:nombre/:localidad", component:DetailsDepartamento},
]
const router = createRouter({
    history:createWebHistory(),
    routes: myRoutes
})
export default router;