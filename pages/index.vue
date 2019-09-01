<template>
  <div>
    <section class="section edo-theme">
      <h1 class="hello-nuxt">Hello Nuxt!</h1>
    </section>
    <section class="section">
      <a
        class="button is-primary is-rounded"
        @click="doClick"
      >Rounded</a>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    doClick () {
      console.log('hi')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
</style>
