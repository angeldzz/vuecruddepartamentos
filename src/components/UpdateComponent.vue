<template>
  <div>
    <form>
        <label>ID departamento</label>
        <input :defaultValue="departamento.numero" class="form-control" type="number" v-model="departamento.numero">
        <label>Nombre</label>
        <input :defaultValue="departamento.nombre" class="form-control" type="text" v-model="departamento.nombre">
        <label>Localidad</label>
        <input :defaultValue="departamento.localidad" class="form-control" type="text" v-model="departamento.localidad">
        <button class="btn btn-primary" @click.prevent="updateDepartamento">Update Departamento</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos'
const service = new ServiceDepartamentos()
export default {
    name:"UpdateComponent",
    data() {
        return {
            departamento: {
                numero: 0,
                nombre: "",
                localidad: "",
            }
        }
    },
    mounted () {
        let id = this.$route.params.id
        service.findDepartamento(id).then(response => {
            this.departamento = response
    })
},
methods: {
    updateDepartamento() {
        service.updateDepartamento(this.departamento).then(() => {
            this.$router.push("/")
        })
    }
},
}
</script>

<style>

</style>