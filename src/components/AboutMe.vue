<template>
  <section class="hero is-medium is-primary is-full-width">
    <div class="hero-body">
      <div id="page" class="container">
        <h1>Hi, I'm Akshdeep. Nice to meet you!</h1>
        <p>
          I’m a self-taught programmer who loves solving problems
          and seeing things work. When I'm not coding, I'm either
          focusing on improving myself as an individual, learning 
          new things, relaxing and playing some games, enjoying 
          the outdoors, or having a blast with friends!
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
#page {
  max-width: 50%;
  text-align: center;
  margin-bottom: 4rem;
  color: white;
  h1 {
      margin-top: -2rem;
      font-size: 2rem;
  }
  p {
      padding-top: 0.7rem;
      font-size: 1.25rem;
  }
}

.hero {
  padding-bottom: 4rem;
}

@media screen and (max-width: 769px) {
  #page {
    max-width: 90%;
    h1 {
      padding-top: 20px;
      padding-bottom: 10px;
    }
    p {
      padding-bottom: 40px;
    }
  }
}
</style>