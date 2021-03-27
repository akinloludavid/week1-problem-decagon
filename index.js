const api = {
  url: 'https://swapi.dev/api/people/?page=',

}

getData = (pageNum = 1) => {

  fetch(api.url + pageNum)
    .then(resp => resp.json())
    .then(displayResult)

}



displayResult = (resp) => {
  let characterName = document.querySelectorAll('.name')
  let characterHeight = document.querySelectorAll('.height')
  let characterGender = document.querySelectorAll('.gender')
  let name = document.querySelectorAll('.d-name')
  for (let i = 0; i < resp.results.length; i++) {
    characterName[i].innerHTML = `${resp.results[i].name}`
    name[i].innerHTML = `Name: ${resp.results[i].name}`
    characterHeight[i].innerHTML = `Height: ${resp.results[i].height}cm`
    characterGender[i].innerHTML = `Gender: ${resp.results[i].gender}`
  }

}

getData()

const next = document.querySelector('#next')
const prev = document.querySelector('#previous')

let page = 1
let numberOfPages = 9;
document.querySelector('#pageNum').innerHTML = `${ page}`
prev.disabled = true;


next.addEventListener('click', evt => {
  page = (page % numberOfPages) + 1;
  document.querySelector('#pageNum').innerHTML = `${ page}`
  getData(page)
  prev.disabled = false
  if (page === 9) {
    next.disabled = true;
  }
})

if (page > 1) {
  prev.disabled = false;
}
prev.addEventListener('click', evt => {
  page = ((page + numberOfPages + 1) % numberOfPages) - 2;

  if (page === 1) prev.disabled = true;
  document.querySelector('#pageNum').innerHTML = `${ page}`
  getData(page)


})