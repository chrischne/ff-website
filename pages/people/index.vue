<template>
  <section class="section">
    <div class="columns is-multiline">
      <div v-for="(person,index) in people" :key="index" class="column is-6-tablet is-6-desktop is-4-widescreen">
        <PersonCard :id="person.id" :name="person.name" :role="person.role" :description="person.description" :image="person.image" />
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
      return this.$store.state.people.all
    }
  }
}
</script>

<style>

</style>
