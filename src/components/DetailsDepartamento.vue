<template>
  <div>
    <router-link to="/" class="btn btn-primary">Volver</router-link>
    <ul class="list-group">
        <li class="list-group-item">ID: {{ $route.params.id }}</li>
        <li class="list-group-item">Nombre: {{ $route.params.nombre }}</li>
        <li class="list-group-item">Localidad: {{ $route.params.localidad }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"DetailsDepartamento"
}
</script>