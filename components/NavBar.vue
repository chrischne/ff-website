<template>
  <nav class="navbar is-fixed-top is-hidden-print" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img class="navbar-item planet" src="/planet.svg" width="80" height="80">
      <!-- <div class="navbar-item has-text-weight-bold is-size-6a is-uppercase narrow"> -->
      <!-- The ReSEARCH Lab -->
      <!-- </div> -->
      <div class="navbar-item has-text-weight-bold is-size-6a is-uppercase">
        <nuxt-link to="/" exact style="text-decoration: none">
          Freie Forschung
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
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" :to="localePath('index')" exact>
          {{ $t('home') }}
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" :to="localePath('projects')">
          {{ $t('projects') }}
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" :to="localePath('people')">
          {{ $t('people') }}
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" :to="localePath('about')">
          {{ $t('about') }}
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" :to="localePath('join')">
          {{ $t('join') }}
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" :to="localePath('contact')">
          {{ $t('contact') }}
        </nuxt-link>
        <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" to="/planets">
          Planets
        </nuxt-link>
        <LangSwitcher />
      </div>
    </div>
  </nav>
</template>

<script>
import LangSwitcher from '@/components/LangSwitcher'
export default {
  components: {
    LangSwitcher
  },
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
@media print {
.is-hidden-print {
display: none !important;
}
}
</style>
