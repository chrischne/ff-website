<template>
  <section class="hero is-medium" :style="{ 'background-color': bgColor }" @mousemove="updateHeroColor">
    <div class="hero-body">
      <div class="container">
        <h2 class="subtitle is-size-3 has-text-white has-text-left slogan">
          Die <strong class="has-text-white">Unabhängige Forschungsstelle Bern</strong> soll zu einer Plattform für unabh. Forschung wachsen, welche projektbezogen, personennah, dynamisch und buerokratiefrei Forschung zu relevanten Themen unterstützt.
        </h2>
        <a href="books.html" class="is-size-1 arrow">
          <strong>&#8594;</strong>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      count: 0,
      bgColor: 'red'
    }
  },
  methods: {
    updateHeroColor (event) {
      const x = event.clientX
      const y = event.clientY
      console.log('hi', x, y)
      let r = this.map(x, 0, 1200, 0, 255)
      let g = this.map(y, 0, 500, 0, 255)
      let b = 0
      r = _.clamp(r, 0, 255)
      g = _.clamp(g, 0, 255)
      b = _.clamp(b, 0, 255)
      this.bgColor = this.rgbstring(r, g, b)
      console.log('this.bgColor', this.bgColor)
    },
    map (n, domainStart, domainEnd, rangeStart, rangeEnd) {
      const amt = n / (domainEnd - domainStart)
      return rangeStart + amt * (rangeEnd - rangeStart)
    },
    rgbstring (r, g, b) {
      return 'rgb(' + [r, g, b].join(',') + ')'
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/main.scss';

.slogan{
    max-width: 700px;
    line-height: 37px;
}

.slogan strong{
   color: white;
}

.arrow{
    line-height: 32px;
    color: white;
}

.dynamic-backround{
    background-color: green;
}

</style>>
