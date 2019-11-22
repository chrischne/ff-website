<template>
  <nav class="navbar is-fixed-top is-hidden-print gradient-background" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <!-- <img class="navbar-item planet" src="/planet.svg" width="80" height="80">
      <div class="navbar-item has-text-weight-bold is-size-6a is-uppercase narrow"> -->
        <!-- The ReSEARCH Lab -->
        <!-- </div> -->
        <div class="navbar-item is-size-5a is-uppercase">
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
        <div class="navbar-start">
          <nuxt-link class="navbar-item is-size-5a" :to="localePath('index')" exact>
            {{ $t('home') }}
          </nuxt-link>
          <nuxt-link class="navbar-item is-size-5a" :to="localePath('projects')">
            {{ $t('projects') }}
          </nuxt-link>
          <nuxt-link class="navbar-item is-size-5a" :to="localePath('people')">
            {{ $t('people') }}
          </nuxt-link>
          <nuxt-link class="navbar-item is-size-5a" :to="localePath('about')">
            {{ $t('about') }}
          </nuxt-link>
          <!-- <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" :to="localePath('join')">
            {{ $t('join') }}
          </nuxt-link> -->
          <nuxt-link class="navbar-item is-size-5a" :to="localePath('contact')">
            {{ $t('contact') }}
          </nuxt-link>
          <!-- <nuxt-link class="navbar-item has-text-weight-semibold is-size-6a is-uppercase" to="/planets">
            Planets
          </nuxt-link> -->
        </div>
        <div class="navbar-menu locale-menu">
          <div class="navbar-end">
            <nuxt-link
              v-for="(locale, i) in showLocales"
              :key="i"
              class="navbar-item  is-size-6a is-uppercase"
              :to="switchLocalePath(locale)"
            >
              {{ locale }}
            </nuxt-link>
          </div>
        </div>
        <!-- <LangSwitcher /> -->
      </div>
    </div>
  </nav>
</template>

<script>
// import LangSwitcher from '@/components/LangSwitcher'
export default {
  components: {

  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    showLocales () {
      console.log(this.$i18n.locales)
      // return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
      return this.$i18n.locales
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

.gradient-background{
  background-color: transparent;
  background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0));
}

.navbar-menu{
  margin-left: 5rem;
}

.locale-menu .navbar-item{

  padding: 0.5rem 0.25rem;
}
@media print {
.is-hidden-print {
display: none !important;
}
}
</style>
