<template>
  <div :class="{ card: true, active: selected, inactive: !selected}" @mouseover="selectCard()" @mouseout="unselectCard()">
    <div class="card-image">
      <figure class="image is-16by9">
        <nuxt-link :to="projectUrl">
          <!-- <img :src="require(`@/assets/img/projects/image1.jpg`)" alt="Placeholder image"> -->
          <img :src="imageUrl" alt="Placeholder image">
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
            <h1 class="title">
              <nuxt-link :to="projectUrl">
                {{ title }}
              </nuxt-link>
            </h1>
            <p class="subtitle">
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
  data () {
    return {
      selected: false
    }
  },
  computed: {
    projectUrl () {
      return '/projects/' + this.id
    },
    imageUrl () {
      return require(`@/assets/${this.image}`)
    }
  },
  methods: {
    selectCard () {
      this.selected = true
    },
    unselectCard () {
      this.selected = false
    }
  }
}
</script>

<style scoped>
img{
    filter: grayscale(80%);
    opacity: 1;
}

.active{
box-shadow: 1.5em;
}

.inactive{
box-shadow: none;
}

.card{
  border: 1px solid #eeeeee;
}

</style>
