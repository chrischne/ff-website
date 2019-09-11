<template>
  <section class="section">
    <!-- <div class="columns is-multiline">
      <div v-for="(project,index) in projects" :key="index" class="column is-6-tablet is-6-desktop is-4-widescreen">
        <ProjectCard :title="project.title" :subtitle="project.subtitle" :content="project.content" :image="project.image" />
      </div>
    </div> -->
    <ProjectCard :title="project.title" :subtitle="project.subtitle" :content="project.content" :image="project.image" />
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
      id: this.$route.params.id

    }
  },
  computed: {
    project () {
      return this.$store.state.projects.all.find(p => p.id === this.id)
    }
  }
}
</script>

<style>

</style>
