<template>
    <div class="box notification is-secondary project">
      <h1 class="title">{{ this.title }}</h1>
      <h2 class="subtitle">{{ this.description }}</h2>
      <h2 class="subtitle">Language: {{ this.language }}</h2>
      <div class="github-url">
        <a id="github-url-text" :href="this.url" target="_blank">
          <span>
          <i class="fas fa-code"/>
          View Source Code
          </span>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "project-card",
  props: {
    title: String,
    description: String,
    language: String,
    url: String
  }
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
.project {
  color: white;
  text-align: center;
  .title {
    padding-bottom: 1rem;
  }
  .github-url {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 1.3rem;
    #github-url-text {
      text-decoration: none;
    }
  }
}
</style>
