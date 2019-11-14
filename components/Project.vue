<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <figure class="image is-4x3">
          <img :src="imageUrl">
        </figure>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
      <div class="column">
        <div class="content is-small">
          <h1>
            Project abstract
          </h1>
          <p>
            {{ abstract }}
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="content" v-html="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    subtitle: String,
    abstract: String,
    content: String,
    image: String
  },
  computed: {
    imageUrl () {
      return require(`@/assets/${this.image}`)
    }
  }
}
</script>

<style scoped>
.container{
    max-width: 960px
}
</style>
