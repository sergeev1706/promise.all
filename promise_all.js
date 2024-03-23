
// ['https://swapi.dev/api/planets/1/', 'https://swapi.dev/api/planets/2/', 'https://swapi.dev/api/planets/3/']
let species = ['https://swapi.dev/api/species/1/', 'https://swapi.dev/api/species/2/', 'https://swapi.dev/api/species/3/', 'https://swapi.dev/api/species/4/']

async function loadResourse(url) {
  return await fetch(url).then(res => res.json())
}

function getData() {
  return Promise.all(species.map(url => loadResourse(url))).then((data) => {
    return data // массив объектов
  })
}

(async () => {
  const data = await getdata()
  data.map(e => console.log(e.name))
})()

function getdata() {
  return Promise.all([
    loadResourse('https://swapi.dev/api/species/1/'),
    loadResourse('https://swapi.dev/api/species/2/'),
    loadResourse('https://swapi.dev/api/species/3/'),
  ]).then(([res1, res2, res3]) => {
    return { res1, res2, res3 }
  })
}

(async () => {
  const data = await getdata()
  console.log(data.res1.name)
})


