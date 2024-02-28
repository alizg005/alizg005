<template>
 <div>
  <nav-bar-component></nav-bar-component>
  <div id="home">
      <Section id="about" :bgPosition="aboutBgPosition">
        <h2>About Me</h2>
        <about-component></about-component>
        
      </Section>
      <Section id="skills" :bgPosition="skillsBgPosition">
        <h2>Skills</h2>

      </Section>
      <Section id="projects" :bgPosition="projectsBgPosition">
        <h2>Projects</h2>
 
      </Section>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarComponent from '../components/NavBarComponent.vue';
import Section from '../components/Section.vue';
import AboutComponent from '../components/AboutComponent.vue';
export default {

  components: {
    NavBarComponent,
    Section,
    AboutComponent
  },
}
</script>

<style >
#home {
  height: 100vh;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
}
</style>