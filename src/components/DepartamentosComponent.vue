<template>
  <div>
    <img src="../assets/images/loading.gif" v-if="status !== true">
    <table class="table table-bordered table-striped table-dark">
      <thead>
        <tr>
          <th>Numero</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="departamento in departamentos" :key="departamento">
          <td>{{ departamento.numero }}</td>
          <td>{{ departamento.nombre }}</td>
          <td>{{ departamento.localidad }}</td>
          <td><router-link 
          :to="'/details/' + departamento.numero + '/' + departamento.nombre + '/' + departamento.localidad" 
          class="btn btn-primary">Detalles</router-link></td>
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
}
</script>