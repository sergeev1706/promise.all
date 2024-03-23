

// на примере SWAPI

let planets = [
  'https://swapi.dev/api/planets/1/',
  'https://swapi.dev/api/planets/2/',
  'https://swapi.dev/api/planets/3/'
];
let species = [
  'https://swapi.dev/api/species/1/',
  'https://swapi.dev/api/species/2/',
  'https://swapi.dev/api/species/3/',
  'https://swapi.dev/api/species/4/'
];

async function loadResourse(url) {
  return await fetch(url).then(res => res.json());
}

function getData() {
  return Promise.all([...planets, ' ', ...species].map(url => url !== ' ' ? loadResourse(url) : url)).then(data => {
    return data
  })
}

(async () => {
  const data = await getData();
  let index = data.indexOf(' ');

  let pl = data.slice(0, index).map(e => e.name)
  let sp = data.slice(index + 1).map(e => e.name)

  console.log(pl);
  console.log(sp);
})();









