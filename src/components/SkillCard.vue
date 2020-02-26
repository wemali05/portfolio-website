<template>
  <div class="column skill-column">
    <h1 class="skills-title">{{ this.title }}</h1>
    <h2 class="lt-header">Languages I use:</h2>
    <h2 class="languages">{{ this.languages }}</h2>
    <h2 class="lt-header">Technologies:</h2>
    <ul>
      <li class="techs"
        v-for="technology in this.technologies"
        :key="technology">
        {{technology}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "skill-card",
  props: {
    title: String,
    languages: String,
    technologies: Array
  }
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
.skill-column {
  text-align: center;
  font-size: 1.2rem;
  padding: 50px 30px;
  color: black;
  border-right: 1px solid $skill-border-color;
}

.skills-title {
  font-size: 2.2rem;
}

.lt-header{
  color: $primary !important;
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.languages {
  font-size: 1.1rem;
}
.techs {
  margin-top: 0.5rem;
  padding: 0.3rem 1rem;
  border: none !important;
  font-size: 1.1rem;
}

@media screen and (max-width: 769px) {
  .skills-title {
    padding-top: 25px;
  }
  .skill-column {
    width: 100%;
  }
}
</style>