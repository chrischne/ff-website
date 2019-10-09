<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h1>Joint</h1>
        <h2>
          here comes a membership form or some kind of third party subscription thing
        </h2>
        <div class="columns">
          <div class="column is-6-tablet is-6-desktop is-6-widescreen">
            <LineChart
              data-path="data.csv"
              title="Title"
              description="Description"
              date-column="Datum"
              value-column="Wert"
              x-label="Hicks Haxe"
              y-label="y-Achse"
              :ticks="5"
            />
          </div>
          <div class="column is-6-tablet is-6-desktop is-6-widescreen">
            <LineChart
              data-path="data.csv"
              title="Title"
              description="Description"
              date-column="Datum"
              value-column="Wert"
              x-label="Hicks Haxe"
              y-label="y-Achse"
              :ticks="5"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import LineChart from '@/components/LineChart'

export default {
  components: {
    LineChart
  }
}
</script>

<style scoped>
   /* .column{
    border: 1px solid green;
  } */
</style>
