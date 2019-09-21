<template>
  <div :id="theuid" />
</template>

<script>
import * as d3 from 'd3'
import * as sszvis from 'sszvis'

export default {
  name: 'LineChart',
  props: {
    dataPath: String,
    title: String,
    description: String,
    dateColumn: String,
    valueColumn: String,
    rulerLabel: String,
    xLabel: String,
    yLabel: String,
    ticks: Number
  },
  data () {
    return {
      state: {
        data: [],
        years: [0, 0],
        lineData: [],
        selection: [],
        currentDate: null
      }
    }
  },
  computed: {
    xAcc () {
      return sszvis.prop('date')
    },
    yAcc () {
      return sszvis.prop('value')
    },
    theuid () {
      return 'sszvis-chart-' + this._uid
    }
  },
  updated () {
    console.log('updated')
  },
  mounted () {
    console.log('mounted')
    console.log(d3.version)
    console.log(sszvis)
    console.log('uid', this._uid)
    console.log('theuid', this.theuid)

    console.log('this.dataPath', this.dataPath)
    d3.csv('data.csv')
      .row((d) => {
        return {
          // probably need to distinguish time or discreet values here...
          // although for a line chart it is rarely not time on x-axis.
          date: sszvis.parseDate(d[this.dateColumn]),
          value: sszvis.parseNumber(d[this.valueColumn])
        }
      })
      .get((error, data) => {
        console.log('hi')
        if (error) {
          console.log('hirrror')
          sszvis.loadError(error)
          return
        }
        console.log('done it')
        console.log('data')
        console.log(data)
        this.prepareState(data)
      })
  },
  methods: {
    render (state) {
      console.log('render')
      console.log(this.title)
      console.log('theuid in render', this.theuid)

      const bounds = sszvis.bounds({ top: 30, bottom: 40 }, '#' + this.theuid)

      // Scales
      const xScale = d3.scaleTime()
        .domain(state.years)
        .range([0, bounds.innerWidth])

      // if smallest y value is great than 0, then minY is 0, otherwise (when there are negatives) its
      // the smallest value
      const minY = d3.min([d3.min(state.data, this.yAcc), 0])
      const maxY = d3.max(state.data, this.yAcc)
      // Add a bit of additional bottom padding to prevent the y-axis value from
      // touching the x-axis if we are having negative y values
      const bottomPadding = (minY < 0) ? 15 : 0

      const yScale = d3.scaleLinear()
        .domain([minY, maxY])
        .range([bounds.innerHeight, 0])

      // Layers
      const chartLayer = sszvis.createSvgLayer('#' + this.theuid, bounds, {
        title: this.title,
        description: this.description
      })

      // Components
      const line = sszvis.line()
        .x(sszvis.compose(xScale, this.xAcc))
        .y(sszvis.compose(yScale, this.yAcc))
        .stroke(sszvis.scaleQual6())

      let xTickValues = this.ticks ? xScale.ticks(this.ticks) : xScale.ticks()// xScale.ticks(d3.time.year,1);
      xTickValues = xTickValues.concat(state.selection.map(this.xAcc))

      const xAxis = sszvis.axisX.time()
        .scale(xScale)
        .orient('bottom')
        .tickValues(xTickValues)
        .highlightTick(this.isSelected)
        .title(this.xLabel)

      const yAxis = sszvis.axisY()
        .scale(yScale)
        .orient('right')
        .title(this.yLabel)
        .dyTitle(-20)
        .contour(true)
        .showZeroY((minY < 0))

      const ruler = sszvis.annotationRuler()
        .top(0)
        .bottom(bounds.innerHeight + bottomPadding)
        .x(sszvis.compose(xScale, this.xAcc))
        .y(sszvis.compose(yScale, this.yAcc))
        .label((d) => {
          return sszvis.formatNumber(d.value) + ' ' + this.rulerLabel
        })
        .flip((d) => {
          return xScale(this.xAcc(d)) >= bounds.innerWidth / 2
        })
        .color(sszvis.scaleQual6())

      // Rendering

      const lineChart = chartLayer.selectGroup('lineChart')
        .datum(state.lineData)

      lineChart.selectGroup('line')
        .call(line)

      lineChart.selectGroup('xAxis')
        .attr('transform', sszvis.translateString(0, bounds.innerHeight + bottomPadding))
        .call(xAxis)

      lineChart.selectGroup('yAxis')
        .call(yAxis)

      chartLayer.selectGroup('ruler')
        .datum(state.selection)
        .call(ruler)

      // Interaction

      const interactionLayer = sszvis.move()
        .xScale(xScale)
        .yScale(yScale)
        .on('move', this.changeDate)
        .on('end', this.resetDate)

      chartLayer.selectGroup('interaction')
        .call(interactionLayer)

      sszvis.viewport.on('resize', this.resize)
    },
    prepareState (data) {
      console.log('prepareState')
      this.state.data = data

      this.state.years = d3.extent(this.state.data, this.xAcc)
      this.state.lineData = [this.state.data]

      this.resetDate()
    },
    changeDate (inputDate) {
      // console.log("changeDate");
      const date = this.closestDatum(this.state.data, sszvis.prop('date'), inputDate).date
      if (this.state.currentDate === date) { return }

      this.state.currentDate = date
      this.state.selection = this.state.data.filter((d) => {
        return d.date === this.state.currentDate && !isNaN(d.value)
      })
      this.render(this.state)
    },
    resetDate () {
      console.log('resetDate')
      const mostRecentDate = d3.max(this.state.data, sszvis.prop('date'))
      this.changeDate(mostRecentDate)
    },
    resize () { this.render(this.state) },
    closestDatum (data, accessor, datum) {
      const i = d3.bisector(accessor).left(data, datum, 1)
      const d0 = data[i - 1]
      const d1 = data[i] || d0
      return datum - accessor(d0) > accessor(d1) - datum ? d1 : d0
    },
    isSelected (d) {
      return sszvis.contains(this.state.selection.map(this.xAcc).map(String), String(d))
    },
    isStartOfYear (d) {
      return d.getMonth() === 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
