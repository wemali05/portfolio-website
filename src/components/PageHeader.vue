<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div id="ph" class="container">
        <h1>Software Developer</h1>
        <h2>I am an experienced   developer aimed at finding solutions in the ever changing world.</h2>
        <img src="@/assets/wema.png" width="225" height="365">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "page-header"
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
#ph {
  text-align: center;
  color: black;
  margin-top: -10rem;
  h1 {
    padding-top: 10rem;
    font-size: 3.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  img {
    margin-top: 0.5rem;
  }
}

@media screen and (max-width: 769px) {
  h1 {
    line-height: 120%;
  }
}
</style>
