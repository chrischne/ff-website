<template>
  <div>
    <svg id="canvas" :width="width" :height="height" :viewBox="bounds" />
  </div>
</template>

<script>

import * as d3 from 'd3'
import _ from 'lodash'
import * as Vec2D from 'vector2d'
import d3ForceMagnetic from 'd3-force-magnetic'

export default {
  props: {
    width: Number,
    height: Number
  },
  computed: {
    bounds () {
      return '-400 -300 800 600'
    }
  },
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
    const width = 800

    const centralMass = 1
    const G = 100

    const sun = {
      id: 'sun',
      mass: centralMass,
      x: 0,
      y: 0
    }
    const mercury = { id: 'mercury' }
    const venus = { id: 'venus' }
    const earth = { id: 'earth' }
    const mars = { id: 'mars' }
    const jupiter = { id: 'jupiter' }
    const saturn = { id: 'saturn' }
    const uranus = { id: 'uranus' }
    const neptun = { id: 'neptun' }
    const pluto = { id: 'pluto' }

    const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptun, pluto]

    for (let i = 0; i < 1000; i++) {
      planets.push({})
    }

    const distanceScale = d3.scaleLinear().domain([0, planets.length]).range([40, height / 2 - 50])
    // const s = Math.sqrt(attractionForce)
    // planets.forEach((p) => {
    //   const v = new Vec2D.Vector(p.x, p.y)
    //   v.subtract(center)
    //   v.rotate(0.5 * Math.PI)
    //   v.mulS(s)
    //   p.vx = v.x
    //   p.vy = v.y
    // })
    // planets.forEach((p, i) => {
    //   const orbitDistance = distanceScale(i + 1)
    //   console.log('orbitDistance', i, orbitDistance)
    //   const orbitalV = Math.sqrt(G * centralMass / orbitDistance)
    //   const initialV = orbitalV
    //   p.x = 0
    //   p.y = -orbitDistance
    //   p.vx = initialV
    //   p.vy = 0
    //   p.completed = _.random(0, 1) > 0.5
    // })
    const center = new Vec2D.Vector(0, 0)
    planets.forEach((p, i) => {
      const orbitDistance = this.randomGaussian(-10, height / 2, 1) // _.random(200, height / 2 - 50) // distanceScale(i + 1)
      console.log('orbitDistance', i, orbitDistance)
      const orbitalV = Math.sqrt(G * centralMass / orbitDistance)
      const initialV = orbitalV
      const theta = _.random(0, 2 * Math.PI)
      const v = new Vec2D.Vector(0, -orbitDistance)
      v.rotate(theta)

      p.x = v.x
      p.y = v.y

      // calculate velocity
      const vel = new Vec2D.Vector(p.x, p.y)
      vel.subtract(center)
      vel.rotate(0.5 * Math.PI)
      vel.normalise()
      vel.mulS(initialV)

      p.vx = vel.x
      p.vy = vel.y
      p.completed = 0 // _.random(0, 1) > 0.5
    })

    const bodies = [sun].concat(planets)

    const circles = d3.select('#canvas').selectAll('.planet')
      .data(bodies)
      .enter()
      .append('circle')
      .classed('planet', true)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', (d) => {
        return d.id === 'sun' ? 10 : _.random(2, 3)
      })
      .style('fill', d => (d.id === 'sun' || d.completed) ? 'black' : 'rgba(0,0,0,0.6)')
      .style('stroke-width', d => d.id === 'sun' ? 3 : 1)
      .style('stroke', d => (d.id === 'sun' || d.completed) ? 'black' : 'none')

    const sim = d3.forceSimulation()
      .alpha(1)
      .alphaDecay(0)
      .velocityDecay(0)
      .force('gravity', d3.forceMagnetic()
        .strength(G)
        .charge(d => d.mass)
      )
      .stop()
      .nodes(bodies)
      .on('tick', () => {
        circles.attr('cx', d => d.x)
        circles.attr('cy', d => d.y)
      })

    // for (let i = 0; i < 1000; i++) {
    //   sim.tick()
    // }

    sim.restart()

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
  },
  methods: {
    randomGaussian (min, max, skew) {
      let u = 0; let v = 0
      while (u === 0) { u = Math.random() } // Converting [0,1) to (0,1)
      while (v === 0) { v = Math.random() }
      let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

      num = num / 10.0 + 0.5 // Translate to 0 -> 1
      if (num > 1 || num < 0) { num = this.randomGaussian(min, max, skew) } // resample between 0 and 1 if out of range
      num = num ** skew // Skew
      num *= max - min // Stretch to fill range
      num += min // offset to min
      return num
    }
  }
}
</script>

<style>

svg{
    /* border: 1px solid black; */
}

</style>
