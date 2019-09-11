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
      id: this.$route.params.id,
      projects: [
        {
          id: 'mobieeg',
          title: 'MobiEEG',
          subtitle: 'Mobile EEG Monitoring',
          content: 'Maiden Flight is an autonomous biological laboratory environment designed for studying the impact of space flight on the sole reproductive node of a bee colony: the queen bee and her retinue.',
          image: '/projectimages/image1.jpg'
        },
        {
          id: 'stresslevel',
          title: 'Stress Level',
          subtitle: 'Stress Level Monitoring at work',
          content: 'Maiden Flight is an autonomous biological laboratory environment designed for studying the impact of space flight on the sole reproductive node of a bee colony: the queen bee and her retinue. ',
          image: '/projectimages/image2.jpg'
        },
        {
          id: 'neurodesign',
          title: 'Neurodesign',
          subtitle: 'Parametric Design based on Biofeedback',
          content: 'Maiden Flight is an autonomous biological laboratory environment designed for studying the impact of space flight on the sole reproductive node of a bee colony: the queen bee and her retinue. ',
          image: '/projectimages/image3.jpg'
        },
        {
          id: 'bigviz',
          title: 'BigViz',
          subtitle: 'Big Data Visualisation',
          content: 'Maiden Flight is an autonomous biological laboratory environment designed for studying the impact of space flight on the sole reproductive node of a bee colony: the queen bee and her retinue. ',
          image: '/projectimages/image4.jpg'
        }
      ]
    }
  },
  computed: {
    project () {
      return this.projects.find(p => p.id === this.id)
    }
  }
}
</script>

<style>

</style>
