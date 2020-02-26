<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <p id="oops" class="title">Oops!</p>
        <div id="fof-text">
          <p>We can't seem to find the page you're looking for.</p>
          <p id="error">Error code: 404</p>
        </div>
        <router-link to="/" class="button is-outlined is-primary is-rounded">Go back to homepage</router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
#oops {
  font-size: 5rem;
}
#fof-text {
  padding-bottom: 30px;
  padding-top: 20px;
  #error {
    font-weight: bold;
  }
}
</style>
