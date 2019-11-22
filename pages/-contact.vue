<template>
  <section class="section">
    <div class="container">
      <div class="is-capped-width">
        <div class="columns">
          <div class="column">
            <AddressCard
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

.is-capped-width{
  max-width: 960px;
}

</style>
