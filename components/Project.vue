<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <figure class="image is-4x3">
          <img src="https://picsum.photos/1920/1080">
        </figure>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h1 class="title">
          Section
        </h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
      <div class="column">
        short description
      </div>
    </div>
    <div class="columns">
      <div class="column">
        long description
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
    content: String,
    image: String
  }
}
</script>

<style>

</style>
