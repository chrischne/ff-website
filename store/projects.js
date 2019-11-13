export const state = () => ({
  en: {
    all: []
  },
  de: {
    all: []
  }
})

export const mutations = {
  setProjects (state, projects) {
    console.log('setProjects')
    // filter projects by locale
    const englishProjects = projects.filter(p => p.locale === 'en')
    const germanProjects = projects.filter(p => p.locale === 'de')

    state.en.all = englishProjects
    state.de.all = germanProjects
  }
}

export const actions = {

}

// export const state = () => ({

//   de: [
//     {
//       'id': 'mobieeg',
//       'title': 'Rocky Running Flannel',
//       'subtitle': 'Mobile EEG-Überwachung',
//       'image': '/img/projects/image1.jpg',
//       'abstract': 'In den Werken von Tarantino ist der Begriff der textuellen Realität ein vorherrschender Begriff. In gewissem Sinne ist Dahmus der Ansicht, dass wir zwischen prädekonstruktiver Kulturtheorie und postdialektischem Objektivismus wählen müssen. In den Werken von Joyce ist ein vorherrschender Begriff die Unterscheidung zwischen innen und außen. Lacan fördert den Einsatz der neokulturellen Texttheorie, um den Kapitalismus herauszufordern.',
//       'bodyContent': '# Überblick\nDas charakteristische Thema der Werke von Pynchon ist eine mythopoetische Realität. Das kulturelle Paradigma des Ausdrucks besagt, dass Narrativität verwendet wird, um den Anderen zu unterdrücken. In gewissem Sinne verwendet Debord den Begriff "postdialektischer Libertarismus", um nicht Dekonstruktion, sondern Neodekonstruktion zu bezeichnen. Wenn man das kulturelle Paradigma des Ausdrucks untersucht, steht man vor einer Wahl: entweder den vorkapitalistischen Sozialismus ablehnen oder daraus schließen, dass die Realität von den Massen kommt. Lacan fördert die Verwendung des modernistischen Paradigmas des Diskurses, um veraltete Wahrnehmungen der sexuellen Identität zu dekonstruieren. Man könnte sagen, wenn der postdialektische Libertarismus Bestand hat, müssen wir uns zwischen postkultureller Sublimation und sontagistischem Lager entscheiden.\n\n# Struktureller Diskurs\n"Klasse ist Teil der Stasis der Wahrheit", sagt Lacan; Brophy [1] zufolge ist jedoch nicht so sehr die Klasse Teil der Stasis der Wahrheit, sondern vielmehr die Bedeutungslosigkeit und anschließende Ökonomie der Klasse. Man könnte sagen, dass Derrida den Begriff "lakanistische Dunkelheit" verwendet, um die Rolle des Beobachters als Künstler zu bezeichnen. Die Prämisse des vortextuellen Marxismus impliziert, dass der Kontext aus der Kommunikation stammen muss. In gewissem Sinne schlägt Foucault die Verwendung des kapitalistischen Ausdrucksparadigmas vor, um die sexuelle Identität zu lesen. Der Strukturdiskurs besagt, dass Bewusstsein einen objektiven Wert hat, aber nur, wenn Sartres Analyse des kapitalistischen Ausdrucksparadigmas gültig ist. Ist dies nicht der Fall, ist das Ziel des Dichters die Dekonstruktion. Daher ist das Hauptthema von Hubbards [2] Aufsatz über den Strukturdiskurs die Gemeinsamkeit zwischen Klasse und Sexualität.',
//       'bodyHtml': '<h1>Überblick</h1>\n<p>Das charakteristische Thema der Werke von Pynchon ist eine mythopoetische Realität. Das kulturelle Paradigma des Ausdrucks besagt, dass Narrativität verwendet wird, um den Anderen zu unterdrücken. In gewissem Sinne verwendet Debord den Begriff &quot;postdialektischer Libertarismus&quot;, um nicht Dekonstruktion, sondern Neodekonstruktion zu bezeichnen. Wenn man das kulturelle Paradigma des Ausdrucks untersucht, steht man vor einer Wahl: entweder den vorkapitalistischen Sozialismus ablehnen oder daraus schließen, dass die Realität von den Massen kommt. Lacan fördert die Verwendung des modernistischen Paradigmas des Diskurses, um veraltete Wahrnehmungen der sexuellen Identität zu dekonstruieren. Man könnte sagen, wenn der postdialektische Libertarismus Bestand hat, müssen wir uns zwischen postkultureller Sublimation und sontagistischem Lager entscheiden.</p>\n<h1>Struktureller Diskurs</h1>\n<p>&quot;Klasse ist Teil der Stasis der Wahrheit&quot;, sagt Lacan; Brophy [1] zufolge ist jedoch nicht so sehr die Klasse Teil der Stasis der Wahrheit, sondern vielmehr die Bedeutungslosigkeit und anschließende Ökonomie der Klasse. Man könnte sagen, dass Derrida den Begriff &quot;lakanistische Dunkelheit&quot; verwendet, um die Rolle des Beobachters als Künstler zu bezeichnen. Die Prämisse des vortextuellen Marxismus impliziert, dass der Kontext aus der Kommunikation stammen muss. In gewissem Sinne schlägt Foucault die Verwendung des kapitalistischen Ausdrucksparadigmas vor, um die sexuelle Identität zu lesen. Der Strukturdiskurs besagt, dass Bewusstsein einen objektiven Wert hat, aber nur, wenn Sartres Analyse des kapitalistischen Ausdrucksparadigmas gültig ist. Ist dies nicht der Fall, ist das Ziel des Dichters die Dekonstruktion. Daher ist das Hauptthema von Hubbards [2] Aufsatz über den Strukturdiskurs die Gemeinsamkeit zwischen Klasse und Sexualität.</p>\n'
//     }
//   ],
//   en: [
//     {
//       'id': 'mobieeg',
//       'title': 'Rocky Running Flannel',
//       'subtitle': 'Mobile EEG Monitoring',
//       'image': '/img/projects/image1.jpg',
//       'abstract': 'In the works of Tarantino, a predominant concept is the concept of textual reality. In a sense, Dahmus holds that we have to choose between predeconstructive cultural theory and postdialectic objectivism. In the works of Joyce, a predominant concept is the distinction between within and without. Lacan promotes the use of neocultural textual theory to challenge capitalism.',
//       'bodyContent': '# Overview\nThe characteristic theme of the works of Pynchon is a mythopoetical reality. The cultural paradigm of expression holds that narrativity is used to oppress the Other. In a sense, Debord uses the term ‘postdialectic libertarianism’ to denote not deconstruction, but neodeconstruction. If one examines the cultural paradigm of expression, one is faced with a choice: either reject precapitalist socialism or conclude that reality comes from the masses. Lacan promotes the use of the modernist paradigm of discourse to deconstruct outdated perceptions of sexual identity. It could be said that if postdialectic libertarianism holds, we have to choose between postcultural sublimation and Sontagist camp.\n\n# Structural discourse\n“Class is part of the stasis of truth,” says Lacan; however, according to Brophy[1] , it is not so much class that is part of the stasis of truth, but rather the meaninglessness, and subsequent economy, of class. It could be said that Derrida uses the term ‘Lacanist obscurity’ to denote the role of the observer as artist. The premise of pretextual Marxism implies that context must come from communication. In a sense, Foucault suggests the use of the capitalist paradigm of expression to read sexual identity. Structural discourse holds that consciousness has objective value, but only if Sartre’s analysis of the capitalist paradigm of expression is valid; if that is not the case, the goal of the poet is deconstruction. Thus, the primary theme of Hubbard’s[2] essay on structural discourse is the common ground between class and sexuality.',
//       'bodyHtml': '<h1>Overview</h1>\n<p>The characteristic theme of the works of Pynchon is a mythopoetical reality. The cultural paradigm of expression holds that narrativity is used to oppress the Other. In a sense, Debord uses the term ‘postdialectic libertarianism’ to denote not deconstruction, but neodeconstruction. If one examines the cultural paradigm of expression, one is faced with a choice: either reject precapitalist socialism or conclude that reality comes from the masses. Lacan promotes the use of the modernist paradigm of discourse to deconstruct outdated perceptions of sexual identity. It could be said that if postdialectic libertarianism holds, we have to choose between postcultural sublimation and Sontagist camp.</p>\n<h1>Structural discourse</h1>\n<p>“Class is part of the stasis of truth,” says Lacan; however, according to Brophy[1] , it is not so much class that is part of the stasis of truth, but rather the meaninglessness, and subsequent economy, of class. It could be said that Derrida uses the term ‘Lacanist obscurity’ to denote the role of the observer as artist. The premise of pretextual Marxism implies that context must come from communication. In a sense, Foucault suggests the use of the capitalist paradigm of expression to read sexual identity. Structural discourse holds that consciousness has objective value, but only if Sartre’s analysis of the capitalist paradigm of expression is valid; if that is not the case, the goal of the poet is deconstruction. Thus, the primary theme of Hubbard’s[2] essay on structural discourse is the common ground between class and sexuality.</p>\n'
//     }
//   ]
// all: [
//   {
//     id: 'mobieeg',
//     title: 'Rocky Running Flannel',
//     subtitle: 'Mobile EEG Monitoring',
//     content: 'Nor disappointed the albions save lineage harold to bower who wandered, earth known counsel any adversity vast earthly in favour and. Say almost uncouth known not. His had earth the.',
//     image: '/img/projects/image1.jpg'
//   },
//   {
//     id: 'stresslevel',
//     title: 'Intensive Yard',
//     subtitle: 'Stress Level Monitoring',
//     content: 'Now for many within vaunted or despair childe, mote to harold can blast not, lowly of which all pomp deigned. Befell it these mirthful delight was. Not festal uncouth time.',
//     image: '/img/projects/image2.jpg'
//   },
//   {
//     id: 'neurodesign',
//     title: 'Weeknight',
//     subtitle: 'Random measurements',
//     content: 'His present and name from caught festal if. Waste breast isle cell would calm fountain. What seemed sore know despair that name not. Companie of beyond could soon low and.',
//     image: '/img/projects/image3.jpg'
//   },
//   {
//     id: 'bigviz',
//     title: 'Surreal Donut',
//     subtitle: 'Big Data Visualisation',
//     content: 'Shades talethis chaste to kiss for. Loved yet name fellow full fondly strange. Save his ear from companie all visit, it might or name things childe suits consecrate drop, as.',
//     image: '/img/projects/image4.jpg'
//   },
//   {
//     id: 'helium',
//     title: 'Helium Ninth',
//     subtitle: 'Rare Strawberry Planet',
//     content: '',
//     image: '/img/projects/image5.jpg'
//   },
//   {
//     id: 'viper',
//     title: 'Digital Viper',
//     subtitle: 'Aberrant Parachute testing',
//     content: '',
//     image: '/img/projects/image6.jpg'
//   },
//   {
//     id: 'hammer',
//     title: 'Dreadful Hammer',
//     subtitle: 'Essential Brown Beta',
//     content: '',
//     image: '/img/projects/image7.jpg'
//   },
//   {
//     id: 'gamma',
//     title: 'Cheerful Gamma',
//     subtitle: 'Migros versus Coop',
//     content: '',
//     image: '/img/projects/image8.jpg'
//   },
//   {
//     id: 'tea',
//     title: 'Tea Rusty',
//     subtitle: 'Frozen Albatross liquidified',
//     content: '',
//     image: '/img/projects/image9.jpg'
//   },
//   {
//     id: 'alpha',
//     title: 'Angry Alpha',
//     subtitle: 'Leadership in spaceships',
//     content: '',
//     image: '/img/projects/image10.jpg'
//   },
//   {
//     id: 'trombone',
//     title: 'Early Trombone',
//     subtitle: 'Low freqency Tinnitus',
//     content: '',
//     image: '/img/projects/image11.png'
//   }
// ]
// })
