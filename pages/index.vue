<template>
  <section class="hero is-medium is-fullheight-with-navbar has-background" :style="{ 'background-color': bgColor }">
    <img alt="Title Background" class="hero-background is-transparent is-4x3" src="/bahnstrasse44.jpg">
    <div class="hero-body">
      <div class="container">
        <h2 class="subtitle is-size-3 has-text-left slogan">
          Die <strong class="underline">Unabhängige Forschungsstelle Bern</strong> soll zu einer Plattform für unabh. Forschung wachsen, welche projektbezogen, personennah, dynamisch und buerokratiefrei Forschung zu relevanten Themen unterstützt.
        </h2>
        <nuxt-link to="/projects" class="is-size-1 arrow">
          <strong>&#8594;</strong>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  data () {
    return {
      count: 0,
      bgColor: 'none'
    }
  },
  methods: {
    updateHeroColor (event) {
      const x = event.clientX
      const y = event.clientY
      // console.log('hi', x, y)
      let r = this.map(x, 0, 1200, 0, 255)
      let g = this.map(y, 0, 500, 0, 255)
      let b = 100
      r = _.clamp(r, 0, 255)
      g = _.clamp(g, 0, 255)
      b = _.clamp(b, 0, 255)
      this.bgColor = this.rgbstring(r, g, b)
      // console.log('this.bgColor', this.bgColor)
    },
    map (n, domainStart, domainEnd, rangeStart, rangeEnd) {
      const amt = n / (domainEnd - domainStart)
      return rangeStart + amt * (rangeEnd - rangeStart)
    },
    rgbstring (r, g, b) {
      return 'rgb(' + [r, g, b].join(',') + ')'
    },
    doNothing (event) {

    }
  }

}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/main.scss';

.slogan{
    max-width: 700px;
    line-height: 37px;
    font-weight: 600;
}

.slogan strong{
  //  color: black;
}

.arrow{
    line-height: 32px;
   color: #4a4a4a;
}

.dynamic-backround{
    background-color: green;
}

.underline{
    text-decoration: underline;
}

.hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
  opacity: 0.5;
  filter: grayscale(80%);
}

</style>>
