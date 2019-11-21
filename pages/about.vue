<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <figure class="image is-4x3">
            <!-- <img src="https://picsum.photos/1920/1080"> -->
            <img :src="imageUrl">
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h3>
              {{ title }}
            </h3>

            <p v-html="content" />
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
      return this.about.title
    },
    content () {
      return this.about.bodyHtml
    },
    imageUrl () {
      return require(`@/assets/${this.image}`)
    },
    image () {
      return this.about.image
    },
    about () {
      // console.log('test:')
      // console.log(this.$store.state.about[this.locale])
      return this.$store.state.about[this.locale]
    },
    locale () {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped>
.container{
    max-width: 960px
}

.desaturate{
  filter: saturate(50%);
}
</style>
