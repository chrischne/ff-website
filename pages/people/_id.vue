<template>
  <section class="section">
    <!-- <div class="columns is-multiline">
      <div v-for="(project,index) in projects" :key="index" class="column is-6-tablet is-6-desktop is-4-widescreen">
        <ProjectCard :title="project.title" :subtitle="project.subtitle" :content="project.content" :image="project.image" />
      </div>
    </div> -->
    <PersonCard :name="person.name" :role="person.role" :description="person.description" :image="person.image" />
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
      id: this.$route.params.id
    }
  },
  computed: {
    person () {
      return this.$store.state.people.all.find(p => p.id === this.id)
    }
  }
}
</script>

<style>

</style>
