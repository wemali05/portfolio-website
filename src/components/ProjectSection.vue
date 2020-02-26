<template>
  <div class="section" id="project-section">
    <div class="project-section-titles">
      <h1>My Recent Projects</h1>
      <h2>Here are a few of my recent projects!</h2>
    </div>
    <div class="columns is-multiline">
      <div class="tile column is-one-third-desktop" 
      v-for="project in projects" :key="project.id">
        <project-card
          :title="project.title"
          :description="project.description"
          :language="project.language"
          :url="project.url"
        />
      </div>
    </div>
    <div id="github-button" class="buttons is-centered">
      <a
        href="https://github.com//wemali05"
        target="_blank"
        class="button is-medium is-rounded is-primary is-outlined"
      >
        <span class="icon">
          <i class="fab fa-github"></i>
        </span>
        <span>See more on GitHub</span>
      </a>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  name: "project-section",
  components: {
    ProjectCard
  },

  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Laravel-QA",
          description: "A question and answer application based on how github works",
          language: "laravel & Vue.js",
          url: "https://github.com/wemali05/laravel-qa"
        },
        {
          id: 2,
          title: "portfolio-website",
          description: "My portfolio website that you're viewing right now",
          language: "Vue.js",
          url: "https://github.com/wemali05/portfolio-website"
        },
        {
          id: 3,
          title: "stock-trader",
          description:
            "A Vue.js single page application on stock trading",
          language: "Vue.js",
          url: "https://github.com/wemali05/stock-trader"
        },
        {
          id: 4,
          title: "vue-axios",
          description: "Promise based HTTP request for javascript applications",
          language: "Vue.js",
          url: "https://github.com/wemali05/vue-axios"
        },
        {
          id: 5,
          title: "grid",
          description:
            "Using css grid layout to make a beautiful website",
          language: "Sass",
          url: "https://github.com/wemali05/grid"
        },
        {
          id: 6,
          title: "flexbox",
          description:
            "Compounding on flexbox to make amazing layouts and website pages",
          language: "Sass",
          url: "https://github.com/wemali05/flexb-trill"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
.project-section-titles {
  text-align: center;
  color: black;
  padding-top: 2rem;
  padding-bottom: 2rem;
  h1 {
    font-size: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }
}
#github-button {
  margin-top: 4rem;
  margin-bottom: 8rem;
}

#project-section.columns {
  background-color: $transparent;
  #project-section.column {
    padding-bottom: 1.75rem;
  }
}

@media screen and (max-width: 769px) {
  #project-section {
    margin-top: -40px;
  }
  #github-button {
    margin-top: 35px;
  }
}
</style>