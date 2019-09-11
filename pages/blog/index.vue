<template>
  <div>
    {{ blogPosts }}
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts () {
      return this.$store.state.posts.blogPosts
    }
  }
}
</script>

<style>

</style>
