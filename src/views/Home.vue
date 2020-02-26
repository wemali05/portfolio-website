<template>
  <div>
    <navbar/>
    <div>
      <page-header/>
      <about-me/>
      <skill-section :skills="skills"/>
    </div>
    <div class="container">
      <project-section :projects="projects"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";
import PageHeader from "@/components/PageHeader.vue";
import ProjectSection from "@/components/ProjectSection.vue";
import SkillSection from "@/components/SkillSection.vue";

export default {
  name: "home",
  components: {
    Navbar,
    PageHeader,
    AboutMe,
    SkillSection,
    ProjectSection,
    Footer
  },
  props: {
    projects: Array,
    skills: Array
  }
};
</script>
