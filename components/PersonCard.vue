<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="imageUrl" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">
            {{ name }}
          </p>
          <p class="subtitle is-6">
            {{ role }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  props: {
    name: String,
    role: String,
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

img{
    filter: grayscale(100%);
}

.card{
  box-shadow: none;
}

.card-content{
  padding-left: 0;
}
</style>
