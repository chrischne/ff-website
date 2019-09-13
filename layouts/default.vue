<template>
  <div>
    <NavBar />
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          The Independent Research Lab, Bahnstrasse 44, CH-3008 Bern, info@ufsb.ch
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
