<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <nuxt-link :to="projectUrl">
          <img :src="image" alt="Placeholder image">
        </nuxt-link>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <!-- <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div> -->
        <div class="media-content">
          <div class="content is-small">
            <h1 class="title is-5">
              <nuxt-link :to="projectUrl">
                {{ title }}
              </nuxt-link>
            </h1>
            <p class="subtitle is-6">
              {{ subtitle }}
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="content is-small">
        {{ content }}
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: String,
    title: String,
    subtitle: String,
    content: String,
    image: String
  },
  computed: {
    projectUrl () {
      return '/projects/' + this.id
    }
  }
}
</script>

<style scoped>
img{
    filter: grayscale(80%);
    opacity: 1;

}
</style>
