
<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale)"
    >
      {{ locale }}
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: 'LangSwitcher',
  computed: {
    showLocales () {
      console.log(this.$i18n.locales)
      // return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
      return this.$i18n.locales
    }
  }
}
</script>
