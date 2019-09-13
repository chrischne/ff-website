<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <AddressCard
            title="Inquiries"
            name="Françoise Lustenberger"
            role="Administrative Assistant"
            institution="Unabhängige Forschungsstelle Bern"
            street="Bahnstrasse 44"
            zip="CH-3114"
            city="Bern"
            country="Switzerland"
            phone="+41 123 45 67"
            email="ping@pong.ch"
          />
        </div>
        <div class="column">
          <AddressCard
            title="Talks"
            name="Hanspeter Hofmann"
            role="Administrative Assistant"
            institution="Unabhängige Forschungsstelle Bern"
            street="Bahnstrasse 44"
            zip="CH-3114"
            city="Bern"
            country="Switzerland"
            phone="+41 123 45 67"
            email="ping@pong.ch"
          />
        </div>
        <div class="column">
          <AddressCard
            title="Press"
            name="Jacqueline Schneider"
            role="Administrative Assistant"
            institution="Unabhängige Forschungsstelle Bern"
            street="Bahnstrasse 44"
            zip="CH-3114"
            city="Bern"
            country="Switzerland"
            phone="+41 123 45 67"
            email="ping@pong.ch"
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
