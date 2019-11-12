<template>
  <section class="section">
    <div class="container">
      <svg id="canvas" width="800" height="600" viewBox="-400 -300 800 600" />
    </div>
  </section>
</template>

<script>

import * as d3 from 'd3'
// import _ from 'lodash'
import * as Vec2D from 'vector2d'
import d3ForceMagnetic from 'd3-force-magnetic'

export default {
  updated () {
    console.log('updated')
  },
  mounted () {
    // we need to have a list of planets
    // then load those planets with d3 and add circles
    // make attraction force for each
    // store these in a variable
    // in tick you do circles.attr("dx", d=> d.x)...

    console.log('mounted')
    console.log(d3.version)
    console.log(d3ForceMagnetic)

    d3.forceMagnetic = d3ForceMagnetic

    const height = 600
    // const width = 800
    // const attractionForce = 0.001 // Regulates orbitting velocity
    // const attractionForce2 = 0.0001

    const orbitDistance = height / 5
    const orbitDistance2 = height / 10
    // const G = 1e-3 * orbitDistance ** 3 // Proportional to cube of orbit distance to maintain behavior over different heights
    const G = 100
    const centralMass = 1

    const orbitalV = Math.sqrt(G * centralMass / orbitDistance)
    const orbitalV2 = Math.sqrt(G * centralMass / orbitDistance2)

    const initialV = orbitalV; const numPnts = 5000
    const initialV2 = orbitalV2
    const satellite = {
      mass: 0.05,
      x: 0,
      y: -orbitDistance,
      vx: initialV,
      vy: 0
    }

    const satellite2 = {
      mass: 0.05,
      x: 0,
      y: -orbitDistance2,
      vx: initialV2,
      vy: 0
    }

    const bodies = [
      { mass: centralMass },
      satellite,
      satellite2
    ]

    // const mercury = { id: 'mercury', x: -50, y: 50, mass: 1 }
    // const venus = { id: 'venus', x: 100, y: 100, mass: 1 }
    // const earth = { id: 'earth', x: 0, y: -70, mass: 10 }

    // const planets = [mercury, venus, earth]

    const circles = d3.select('#canvas').selectAll('.planet')
      .data(bodies)
      .enter()
      .append('circle')
      .classed('planet', true)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 6)

    // d3.forceSimulation()
    //   .alphaDecay(0)
    //   .velocityDecay(0)
    //   .nodes(planets)
    // // Pull towards center with weak force
    //   .force('centerX', d3.forceX().strength(attractionForce))
    //   .force('centerY', d3.forceY().strength(attractionForce))
    //   // .force('center', d3.forceCenter())
    //   .on('tick', () => {
    //     // console.log('tick')
    //     circles.attr('cx', d => d.x)
    //     circles.attr('cy', d => d.y)
    //     // circles.attr('r', _.random(1, 10))
    //   })

    const forceSim = d3.forceSimulation()
      .alphaDecay(0)
      .velocityDecay(0)
      // .stop()
      .force('gravity', d3.forceMagnetic()
        .strength(G)
        .charge(d => d.mass)
      )
      .nodes(bodies)
      .on('tick', () => {
        console.log('thick')
        circles.attr('cx', d => d.x)
        circles.attr('cy', d => d.y)
      })

    // Spin the particles
    // const center = new Vec2D.Vector(0, 0)
    // // console.log('vector')
    // // console.log(center.length())
    // const s = Math.sqrt(attractionForce)
    // planets.forEach((p) => {
    //   const v = new Vec2D.Vector(p.x, p.y)
    //   v.subtract(center)
    //   v.rotate(0.5 * Math.PI)
    //   v.mulS(s)
    //   p.vx = v.x
    //   p.vy = v.y
    // })

    // particle.y = -height * 0.2
    // particle.vx = 0.2 * height * Math.sqrt(attractionForce)
    // particle2.y = -height * 0.3
    // particle2.vx = 0.3 * height * Math.sqrt(attractionForce)
  }
}
</script>

<style>

svg{
    border: 1px solid black;
}

</style>
