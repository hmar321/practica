<template>
  <div>
    <h1>Alumnos Component</h1>
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Img</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alumno in alumnos" :key="alumno">
          <td>{{ alumno.nombre }} {{ alumno.apellidos }}</td>
          <td>{{ alumno.idCurso }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AlumnoService from "@/services/AlumnoService";
import { mapGetters } from 'vuex';
const service = new AlumnoService();
export default {
  name: "AlumnosComponent",
  data() {
    return {
      alumnos: [],
    };
  },
  methods: {
    cargarAlumnos() {
      var token=this.$store.getters.token;
      var anyo = 2023;
      service.getAlumnosToken(anyo,token).then((res) => {
        this.alumnos = res;
      });
    },
  },
  mounted() {
    mapGetters(['token']);
    this.cargarAlumnos();
  },
};
</script>

<style></style>
