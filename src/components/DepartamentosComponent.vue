<template>
  <div>
    <img src="../assets/images/loading.gif" v-if="status !== true">
    <table class="table table-bordered table-striped table-dark">
      <thead>
        <tr>
          <th>Numero</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="departamento in departamentos" :key="departamento">
          <td>{{ departamento.numero }}</td>
          <td>{{ departamento.nombre }}</td>
          <td>{{ departamento.localidad }}</td>
          <td><router-link 
          :to="'/details/' + departamento.numero + '/' + departamento.nombre + '/' + departamento.localidad" 
          class="btn btn-primary">Detalles</router-link>
          </td>
          <td><router-link 
          :to="'/update/' + departamento.numero "
          class="btn btn-warning">Update</router-link>
          </td>
          <td><button class="btn btn-close" @click="DeleteDepartamento(departamento.numero)"></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamento from '../services/ServiceDepartamentos'
const service = new ServiceDepartamento()
export default {
  name:"DepartamentosComponent",
  data() {
    return {
      departamentos: [],
      status: false
    }
  },
  mounted () {
    service.getDepartamentos().then(response => {
      this.departamentos = response
      this.status = true
    });
  },
  methods: {
    DeleteDepartamento(id) {
      service.deleteDepartamento(id).then(()=>{
        console.log("Departamento Borrado");
        window.location.reload()
      })
    }
  },
}
</script>