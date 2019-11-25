<template>
  <section class="section">
    <div class="container">
      <div class="is-capped-width">
        <div class="columns">
          <div class="column">
            <div class="content">
              <h2>
                {{ title }}
              </h2>
              <p class="is-size-5a" v-html="content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    title () {
      return this.researchPods.title
    },
    content () {
      return this.researchPods.bodyHtml
    },
    researchPods () {
      // console.log('test:')
      // console.log(this.$store.state.about[this.locale])
      return this.$store.state.research_pods[this.locale]
    },
    locale () {
      return this.$i18n.locale
    }
  }
}
</script>
<style scoped>
.is-capped-width{
  max-width: 960px;
}
</style>
