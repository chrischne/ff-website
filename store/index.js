// export const state = () => ({

// })
// export const getters = {}
export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async nuxtServerInit ({ commit }) {
    console.log('nuxtServerInit')
    console.log('loading project files')
    const projectFiles = await require.context('~/assets/content/projects/', false, /\.json$/)
    const projects = projectFiles.keys().map((key) => {
      const res = projectFiles(key)
      // console.log('res')
      // console.log(res)
      // res.slug = key.slice(2, -5)
      return res
    })
    await commit('projects/setProjects', projects)

    console.log('load people files')
    const peopleFiles = await require.context('~/assets/content/people/', false, /\.json$/)
    const people = peopleFiles.keys().map((key) => {
      const res = peopleFiles(key)
      // console.log('res')
      // console.log(res)
      // res.slug = key.slice(2, -5)
      return res
    })
    await commit('people/setPeople', people)

    console.log('load about files')
    const aboutEn = await require('~/assets/content/about_en.json')
    const aboutDe = await require('~/assets/content/about_de.json')

    // console.log('aboutEn')
    // console.log(aboutEn)
    // console.log('aboutDe')
    // console.log(aboutDe)

    await commit('about/setAbout', [aboutEn, aboutDe])

    // const people = peopleFiles.keys().map((key) => {
    //   const res = peopleFiles(key)
    //   // console.log('res')
    //   // console.log(res)
    //   // res.slug = key.slice(2, -5)
    //   return res
    // })
    // await commit('people/setPeople', people)
  }
}
