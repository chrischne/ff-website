<template>
  <div>
    <NavBar />
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered is-size-5a">
        <p>
          Freie Forschung, Bahnstrasse 44, CH-3008 Bern, info@ff.vision
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
<style scoped>
.narrow{
  /* max-width: 300px; */
  font-weight: 800;
}

</style>
