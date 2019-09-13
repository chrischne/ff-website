<template>
  <nav class="navbar has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img class="navbar-item" src="/logo3.png">
      </a>
      <div class="navbar-item has-text-weight-bold is-size-2 is-uppercase narrow">
        <!-- The ReSEARCH Lab -->
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
</style>
