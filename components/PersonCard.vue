<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="theImage" alt="Placeholder image">
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
      <!-- <div class="content">
        {{ description }}
      </div> -->
    </div>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  props: {
    id: String,
    name: String,
    role: String,
    description: String,
    image: String
  },
  data () {
    return {
      theImage: 'https://via.placeholder.com/400'
    }
  },
  computed: {
    personUrl () {
      return '/people/' + this.id
    },
    imageUrl () {
      return this.theImage
    }
  },
  mounted () {
    // setTimeout(this.doFetch(), _.random(1, 10))
    const options = ['portrait', 'face', 'person', 'head']
    const url = 'https://source.unsplash.com/400x400/?' + _.sample(options)
    fetch(url, { cache: 'no-store' }).then((response) => {
      console.log('response', response.url)
      this.theImage = response.url
    })

    //
  }
}
</script>

<style scoped>
img{
    filter: grayscale(100%);
}

.card-content{
  padding-left: 0;
}
</style>
