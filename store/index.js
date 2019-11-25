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

    await commit('about/setAbout', [aboutEn, aboutDe])

    console.log('load research pod files')
    const podsEn = await require('~/assets/content/research_pods_en.json')
    const podsDe = await require('~/assets/content/research_pods_de.json')

    await commit('research_pods/setResearchPods', [podsEn, podsDe])

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
