<template>
  <div>
    <nav class="navbar has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img class="navbar-item" src="logo3.png">
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
          <a class="navbar-item has-text-weight-semibold is-size-6a">
            Home
          </a>
          <a class="navbar-item has-text-weight-semibold is-size-6a">
            Projects
          </a>
          <a class="navbar-item has-text-weight-semibold is-size-6a">
            People
          </a>
          <a class="navbar-item has-text-weight-semibold is-size-6a">
            About
          </a>
          <a class="navbar-item has-text-weight-semibold is-size-6a">
            Join
          </a>
          <a class="navbar-item has-text-weight-semibold is-size-6a">
            Contact
          </a>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
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
.narrow{
  /* max-width: 300px; */
  font-weight: 800;
}
</style>
