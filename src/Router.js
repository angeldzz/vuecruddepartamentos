import DepartamentosComponent from '@/components/DepartamentosComponent.vue';
import CreateDepartamento from '@/components/CreateDepartamento.vue';
import DetailsDepartamento from '@/components/DetailsDepartamento.vue';
import UpdateComponent from '@/components/UpdateComponent.vue';
import { createWebHistory,createRouter } from 'vue-router';

const myRoutes = [
    { path:"/", component:DepartamentosComponent},
    { path:"/createdepartamento", component:CreateDepartamento},
    { path:"/details/:id/:nombre/:localidad", component:DetailsDepartamento},
    { path:"/update/:id", component:UpdateComponent},
]
const router = createRouter({
    history:createWebHistory(),
    routes: myRoutes
})
export default router;