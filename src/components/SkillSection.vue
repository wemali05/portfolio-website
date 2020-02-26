<template>
  <section class="section skills">
    <div class="container is-narrow">
      <div class="box is-paddingless">
        <div class="columns is-centered is-marginless">
          <skill-card
            title="Front-end Skills"
            languages="HTML, CSS, JavaScript, Sass"
            :technologies="['Vue.js', 'React.js', 'Bulma','Buefy','Webpack','Babel',
            'Git']"
          />
          <skill-card
            title="Back-end Skills"
            languages="Python, JavaScript"
            :technologies="['Node.js','Express.js','MongoDB','Firestore',
            'Amazon Web Services','Netlify','Digital Ocean','RESTful APIs',
            'Git',
          ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from "@/components/SkillCard.vue";
export default {
  name: "skill-section",
  components: {
    SkillCard
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
.skills {
  padding-bottom: 1rem;
  margin-top: -14rem;
  .column:last-child {
    border-right: none;
    border-bottom: none;
  }
}

.container.is-narrow {
  max-width: 800px;
}

@media screen and (max-width: 769px) {
  .skills {
    display: flex;
    .column:first-child {
      border-bottom: 1px solid $skill-border-color;
      border-right: none;
    }
  }
  .container.is-narrow {
    width: 100%;
  }
}
</style>