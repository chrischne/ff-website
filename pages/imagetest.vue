<template>
  <div>
    <img :src="image" :alt="selectedDog">
  </div>
</template>

<script>
export default {
  data () {
    return {
      image: '/projectimages/image1.jpg'
    }
  },
  computed: {
    imageUrl () {
      return require(this.image)
    }
  }
}
</script>

<style>

</style>
