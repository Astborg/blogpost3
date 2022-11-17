<template>
    <div class="w-screen">
      <Navbar />
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import Navbar from './components/navbar/navBar.vue';

export default {
  name: 'AppHome',
  components: {
    Navbar: Navbar
  },
  
};
</script>

<style>

.container {
  font-family: Arial, Helvetica, sans-serif;
}

</style>
