<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <AddressCard
            :title="$t('contact')"
            name="Freie Forschung"
            street="Bahnstrasse 44"
            zip="CH-3008"
            city="Bern"
            country="Switzerland"
            phone="-"
            email="info@ffff.io"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AddressCard from '@/components/AddressCard'

export default {
  components: {
    AddressCard
  }
}
</script>

<style scoped>

.container{
    max-width: 960px
}
</style>
