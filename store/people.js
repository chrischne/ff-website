import _ from 'lodash'

export const state = () => ({
  en: {
    all: []
  },
  de: {
    all: []
  }
})

export const mutations = {
  setPeople (state, people) {
    console.log('setProjects')

    people = people.map((p) => {
      p.id = _.uniqueId('person_')
      return p
    })

    // filter projects by locale
    const englishPeople = people.filter(p => p.locale === 'en')
    const germanPeople = people.filter(p => p.locale === 'de')

    state.en.all = englishPeople
    state.de.all = germanPeople
  }
}

export const actions = {

}

// export const state = () => ({
//   all: [
//     {
//       id: '12',
//       name: 'Patrick Neff',
//       role: 'Co-Founder'
//     },
//     {
//       id: '11',
//       name: 'Christian Schneider',
//       role: 'Co-Founder'
//     },
//     {
//       'id': '1',
//       'name': 'Leanne Graham',
//       'role': 'Collaborator'
//     },
//     {
//       'id': '2',
//       'name': 'Ervin Howell',
//       'role': 'Collaborator'
//     },
//     {
//       'id': '3',
//       'name': 'Clementine Bauch',
//       'role': 'Collaborator'
//     },
//     {
//       'id': '4',
//       'name': 'Patricia Lebsack',
//       'role': 'Collaborator'
//     },
//     {
//       'id': '5',
//       'name': 'Chelsey Dietrich',
//       'role': 'Collaborator'
//     },
//     {
//       'id': '6',
//       'name': 'Dennis Schulist',
//       'role': 'Collaborator'
//     },
//     {
//       'id': '7',
//       'name': 'Kurtis Weissnat',
//       'role': 'Collaborator'
//     },
//     {
//       'id': '8',
//       'name': 'Nicholas Runolfsdottir',
//       'role': 'Collaborator'
//     },
//     {
//       'id': '9',
//       'name': 'Glenna Reichert',
//       'role': 'Collaborator'
//     },
//     {
//       'id': '10',
//       'name': 'Clementina DuBuque',
//       'role': 'Collaborator'
//     }
//   ]
// })
