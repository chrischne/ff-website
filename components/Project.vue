<template>
  <div class="is-capped-width">
    <div class="columns">
      <div class="column">
        <figure class="image is-4x3">
          <img :src="imageUrl">
        </figure>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h2 class="title">
          {{ title }}
        </h2>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
      <div class="column">
        <div class="content">
          <h3>
            Project abstract
          </h3>
          <p>
            {{ abstract }}
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="content is-size-5a" v-html="content" />
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

.is-capped-width{
   max-width: 960px;
}
/* .container{
    max-width: 960px
} */

/* .content{
 color: black;
} */

</style>
