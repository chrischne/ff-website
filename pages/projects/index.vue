<template>
  <section class="section">
    <div class="columns is-multiline">
      <div v-for="(project,index) in projects" :key="index" class="column is-6-tablet is-4-desktop is-3-widescreen">
        <ProjectCard :id="project.id" :title="project.title" :subtitle="project.subtitle" :content="project.content" :image="project.image" />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
  components: {
    ProjectCard
  },
  data () {
    return {
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects.en
    }
  }
}
</script>

<style scoped>

</style>
