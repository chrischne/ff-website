<template>
  <section class="hero is-medium is-fullheight-with-navbar has-background" :style="{ 'background-color': bgColor }">
    <!-- <img alt="Title Background" class="hero-background is-transparent is-4x3" src="/bahnstrasse44.jpg" :class="{ load: doLoad, unload: !doLoad }"> -->
    <div class="planets hero-background">
      <!-- <SolarSystem :width="1000" :height="600" /> -->
      <div class="soli">
        <SolarSystem2 :width="1000" :height="600" />
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <!-- <div class="test">
          Through the 1950s, many major features were pioneered in the field of operating systems on mainframe computers, including batch processing, input/output interrupt, buffering, multitasking, spooling, runtime libraries, link-loading, and programs for sorting records in files. These features were included or not included in application software at the option of application programmers, rather than in a separate operating system used by all applications. In 1959, the SHARE Operating System was released as an integrated utility for the IBM 704, and later in the 709 and 7090 mainframes, although it was quickly supplanted by IBSYS/IBJOB on the 709, 7090 and 7094
        </div> -->
        <!-- <h2 class="subtitle is-size-4  slogan is-centered">
          <strong class="underline">Freie Forschung</strong> ist eine Plattform, welche projektbezogen, personennah, dynamisch und buerokratiefrei Forschung zu relevanten Themen unterstützt.
        </h2> -->
        <!-- <nuxt-link to="/projects" class="is-size-3 arrow is-vcentered">
          &#8594;
        </nuxt-link> -->

        <!-- <div class="hola1 columns is-centered transparent-background">
          <div class="hola2 column is-5 slogan">
            <h2><strong class="underline">Freie Forschung</strong> ist eine Plattform, welche projektbezogen, personennah, dynamisch und buerokratiefrei Forschung zu relevanten Themen unterstützt.</h2>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
// import SolarSystem from '@/components/SolarSystem'
import SolarSystem2 from '@/components/SolarSystem2'

export default {
  components: {
    // SolarSystem,
    SolarSystem2
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

.transparent-background{
  background-color: rgba(255,255,255,0.5);
}
.test{
  font-family: "CoFoSans-Regular", Arial, sans-serif;
  font-size: 18px;
  line-height: 23px;
  color: black;
  max-width: 700px;
}
.slogan{
    // max-width: 500px;
    line-height: 28px;
    font-weight: 400;
    // margin-top: 15rem;
}

.slogan strong{
  //  color: black;

}

.arrow{
  line-height: 24px;

   color: black;
}

.dynamic-backround{
    // background-color: green;
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
  // border: 1px solid green;
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
