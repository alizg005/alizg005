<template>
    <nav-bar-component></nav-bar-component>
    <router-view />
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

#about {
  background: url('/src/img/Parallax-background.jpg') center/cover no-repeat fixed;
}

#projects {
  background: url('/src/img/Parallax-background.jpg') center/cover no-repeat fixed;
}

#skills {
  background: url('/src/img/Parallax-background.jpg') center/cover no-repeat fixed;
}
#home {
  background: url('/src/img/Parallax-background.jpg') center/cover no-repeat fixed;
}
</style>
