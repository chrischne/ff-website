<template>
  <section class="section">
    <!-- <div class="columns is-multiline">
      <div v-for="(project,index) in projects" :key="index" class="column is-6-tablet is-6-desktop is-4-widescreen">
        <ProjectCard :title="project.title" :subtitle="project.subtitle" :content="project.content" :image="project.image" />
      </div>
    </div> -->
    <Project :id="project.id" :title="project.title" :subtitle="project.subtitle" :content="project.content" :image="project.image" />
  </section>
</template>

<script>
import Project from '@/components/Project'

export default {
  components: {
    Project
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
  },
  methods: {
    randomImage () {
      return 'https://i.pravatar.cc/800'
    }
  }
}
</script>

<style>

</style>
