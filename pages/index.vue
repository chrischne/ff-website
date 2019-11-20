<template>
  <section class="hero is-medium is-fullheight-with-navbar has-background" :style="{ 'background-color': bgColor }">
    <!-- <img alt="Title Background" class="hero-background is-transparent is-4x3" src="/bahnstrasse44.jpg" :class="{ load: doLoad, unload: !doLoad }"> -->
    <div class="planets hero-background">
      <SolarSystem :width="1000" :height="600" />
    </div>
    <div class="hero-body">
      <div class="container">
        <h2 class="subtitle is-size-4 has-text-left slogan">
          <strong class="underline">Freie Forschung</strong> ist eine Plattform, welche projektbezogen, personennah, dynamisch und buerokratiefrei Forschung zu relevanten Themen unterstützt.
        </h2>
        <!-- <nuxt-link to="/projects" class="is-size-3 arrow is-vcentered">
          &#8594;
        </nuxt-link> -->
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
import SolarSystem from '@/components/SolarSystem'

export default {
  components: {
    SolarSystem
  },
  data () {
    return {
      count: 0,
      bgColor: 'none',
      doLoad: false
    }
  },
  mounted () {
    setTimeout(() => {
      console.log('load')
      this.doLoad = true
    }, 100)
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
    line-height: 28px;
    font-weight: 400;
    margin-top: 15rem;
}

.slogan strong{
  //  color: black;

}

.arrow{
  line-height: 24px;

   color: black;
}

.dynamic-backround{
    background-color: green;
}

.underline{
    text-decoration: underline;
}

.hero{
  // border: 5px solid green;
}

.hero-body{
  // border: 5px solid red;
}

.slogan{
  // border: 1px solid blue;
}

.planets{
  // border: 1px solid yellow;

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

  filter: grayscale(80%);

}

.unload{
  opacity: 0;
}

.load{
  opacity: 0.8;
   -webkit-transition: opacity 1s ease-in;
       -moz-transition: opacity 1s ease-in;
        -ms-transition: opacity 1s ease-in;
         -o-transition: opacity 1s ease-in;
            transition: opacity 1s ease-in;
}

</style>>
