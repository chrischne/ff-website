<template>
  <section class="section">
    <div class="container">
      <svg id="canvas" width="800" height="600" viewBox="-400 -300 800 600">
        <circle id="center" r="20" cx="0" cy="0" />
        <circle id="particle1" r="8" />
        <circle id="particle2" r="8" />
      </svg>
    </div>
  </section>
</template>

<script>

import * as d3 from 'd3'

export default {
  updated () {
    console.log('updated')
  },
  mounted () {
    console.log('mounded')
    console.log(d3.version)
    const height = 600
    // const width = 800
    const attractionForce = 0.001 // Regulates orbitting velocity
    const particle = { x: 0, y: 100 }
    const particle2 = { x: 0, y: 100 }
    const circleObj1 = d3.select('#particle1')
    const circleObj2 = d3.select('#particle2')
    d3.forceSimulation()
      .alphaDecay(0)
      .velocityDecay(0)
      .nodes([particle, particle2])
    // Pull towards center with weak force
      .force('centerX', d3.forceX().strength(attractionForce))
      .force('centerY', d3.forceY().strength(attractionForce))
      .on('tick', () => {
        // console.log('tick')
        circleObj1.attr('cx', particle.x).attr('cy', particle.y)
        circleObj2.attr('cx', particle2.x).attr('cy', particle2.y)
      })

    // Spin it
    particle.y = -height * 0.2
    particle.vx = 0.2 * height * Math.sqrt(attractionForce)
    particle2.y = -height * 0.3
    particle2.vx = 0.3 * height * Math.sqrt(attractionForce)
  }
}
</script>

<style>

svg{
    border: 1px solid black;
}

</style>
