<template>
  <div>
    <nav-bar-component></nav-bar-component>
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
export default {
  components: {
    NavBarComponent
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
}

.section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
}

#home {
  background: url('/src/img/background2.jpg') center/cover no-repeat fixed;
}

#about {
  background: url('/src/img/background3.png') center/cover no-repeat fixed;
}

#projects {
  background: url('/src/img/background4.png') center/cover no-repeat fixed;
}

#skills {
  background: url('/src/img/background4.png') center/cover no-repeat fixed;
}

</style>