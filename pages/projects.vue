<template>
  <section class="section">
    <ProjectCard title="TheTitle" subtitle="thesubtitle" content="thecontent" />
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
      greeting: 'hello'
    }
  }
}
</script>

<style>

</style>
