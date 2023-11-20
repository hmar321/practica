<template>
  <MenuComponent/>
  <div class="container mt-3">
    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>
</style>
