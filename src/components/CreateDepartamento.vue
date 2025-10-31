<template>
  <div>
    <form>
        <label>ID departamento</label>
        <input class="form-control" type="number" v-model="departamento.numero">
        <label>Nombre</label>
        <input class="form-control" type="text" v-model="departamento.nombre">
        <label>Localidad</label>
        <input class="form-control" type="text" v-model="departamento.localidad">
        <button class="btn btn-primary" @click.prevent="createDepartamento">Create Departamento</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos'
const service = new ServiceDepartamentos()
export default {
    name:"CreateDepartamento",
    data() {
        return {
            departamento: {
                numero:0,
                nombre:"",
                localidad:"",
            }
        }
    },
    methods: {
        createDepartamento() {
            service.createDepartamento(this.departamento).then(() => {
                this.$router.push("/")
            })
        }
    },
}
</script>