<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            <nuxt-link :to="personUrl">
              {{ name }}
            </nuxt-link>
          </p>
          <p class="subtitle is-6">
            {{ role }}
          </p>
        </div>
      </div>
      <!-- <div class="content">
        {{ description }}
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: String,
    name: String,
    role: String,
    description: String,
    image: String
  },
  computed: {
    personUrl () {
      return '/people/' + this.id
    }
  }
}
</script>

<style scoped>
img{
    filter: grayscale(80%);
}
</style>
