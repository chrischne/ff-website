<template>
  <nav class="navbar has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img class="navbar-item planet" src="/planet.svg" width="80" height="80">
      <!-- <div class="navbar-item has-text-weight-bold is-size-6a is-uppercase narrow"> -->
      <!-- The ReSEARCH Lab -->
      <!-- </div> -->
      <div class="navbar-item has-text-weight-bold is-size-6a is-uppercase">
        <nuxt-link to="/" exact style="text-decoration: none">
          Unabhängige Forschungsstelle
        </nuxt-link>
      </div>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{'is-active': isOpen}"
        @click="isOpen = !isOpen"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
      <div class="navbar-end">
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" to="/" exact>
          Home
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" to="/projects">
          Projects
        </nuxt-link>

        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" to="/people">
          People
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" to="/about">
          About
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" to="/join">
          Join
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" to="/contact">
          Contact
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
a:hover, .nuxt-link-active{
  text-decoration: underline;
}
.planet{
  margin-left: 1rem;
  /* margin-right: -1rem; */
}

</style>
