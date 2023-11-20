<template>
  <div>
    <h1>HomeComponent</h1>
    <form v-on:submit.prevent="login()">
      <div class="mb-3" style="width: 350px">
        <label class="form-label">Usuario</label>
        <input type="text" class="form-control" v-model="usuario.userName" />
      </div>
      <div class="mb-3" style="width: 350px">
        <label class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          v-model="usuario.password"
        />
      </div>
      <button class="btn btn-success">Login</button>
    </form>
  </div>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex';
import AlumnoService from "../services/AlumnoService";
const service = new AlumnoService();
export default {
  name: "HomeComponent",
  mounted() {
    mapMutations(['settoken',]);
    mapGetters(['token',]);
  },
  methods: {
    login() {
      console.log(this.usuario);
      service.getToken(this.usuario).then((res) => {
        this.$store.commit('settoken', res);
        this.$router.push("/alumnos");
      });
    },
  },
  data() {
    return {
      usuario: {
        userName: "",
        password: "",
      },
    };
  },
};
</script>

<style></style>
