<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div v-for="(person) in sortedPeople" :key="person.id" class="column is-4-tablet is-3-desktop is-3-widescreen">
          <PersonCard :id="person.id" :name="person.name" :role="person.role" :image="person.image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PersonCard from '@/components/PersonCard'

export default {
  components: {
    PersonCard
  },
  data () {
    return {
    }
  },
  computed: {
    people () {
      return this.$store.state.people[this.locale].all
    },
    sortedPeople () {
      const arr = []
      return this.people.slice().sort((a, b) => a.sort - b.sort)
    },
    locale () {
      return this.$i18n.locale
    }
  }

}
</script>

<style>

</style>
