// export const state = () => ({

// })
// export const getters = {}
export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async nuxtServerInit ({ commit }) {
    console.log('hello from nuxtServerInit')
    const files = await require.context('~/assets/content/projects/', false, /\.json$/)
    const projects = files.keys().map((key) => {
      const res = files(key)
      // console.log('res')
      // console.log(res)
      // res.slug = key.slice(2, -5)
      return res
    })
    await commit('projects/setProjects', projects)
  }
}
