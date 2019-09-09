<template>
  <section class="section">
    <div class="columns is-multiline">
      <div v-for="(project,index) in projects" :key="index" class="column is-6-tablet is-6-desktop is-4-widescreen">
        <ProjectCard :title="project.title" :subtitle="project.subtitle" :content="project.content" />
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
      greeting: 'hello',
      projects: [
        {
          title: 'MobiEEG',
          subtitle: 'Mobile EEG Monitoring',
          content: 'Maiden Flight is an autonomous biological laboratory environment designed for studying the impact of space flight on the sole reproductive node of a bee colony: the queen bee and her retinue.'
        },
        {
          title: 'Stress Level',
          subtitle: 'Stress Lebel Monitoring at work',
          content: 'Maiden Flight is an autonomous biological laboratory environment designed for studying the impact of space flight on the sole reproductive node of a bee colony: the queen bee and her retinue. '
        },
        {
          title: 'Neurodesign',
          subtitle: 'Parametric Design based on Biofeedback',
          content: 'Maiden Flight is an autonomous biological laboratory environment designed for studying the impact of space flight on the sole reproductive node of a bee colony: the queen bee and her retinue. '
        },
        {
          title: 'BigViz',
          subtitle: 'Big Data Visualisation',
          content: 'Maiden Flight is an autonomous biological laboratory environment designed for studying the impact of space flight on the sole reproductive node of a bee colony: the queen bee and her retinue. '
        }
      ]
    }
  }
}
</script>

<style>

</style>
