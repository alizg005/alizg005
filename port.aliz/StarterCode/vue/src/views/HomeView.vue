<template>
 <div>
  <nav-bar-component></nav-bar-component>
  <div id="home">

    <Section id="home" :bgPosition="aboutBgPosition"  >
        <home-component></home-component>
        
      </Section>
      <Section id="about" :bgPosition="aboutBgPosition">
        <about-component></about-component>
        
      </Section>
      <Section id="skills" :bgPosition="skillsBgPosition" class="smaller-section">
        <skills-component></skills-component>



      </Section>
      <Section id="projects" :bgPosition="projectsBgPosition">
        <projects-component></projects-component>
 
      </Section>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarComponent from '../components/NavBarComponent.vue';
import Section from '../components/Section.vue';
import AboutComponent from '../components/AboutComponent.vue';
import ProjectsComponent from '../components/ProjectsComponent.vue';
import SkillsComponent from '../components/SkillsComponent.vue';
import homeComponent from '../components/homeComponent.vue';
export default {

  components: {
    NavBarComponent,
    Section,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    homeComponent
  },

}
</script>

<style >
#home {
  height: 100vh;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
}

.smaller-section {
  height: 10vh !important;
}
</style>