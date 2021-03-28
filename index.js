const api = {
  url: 'https://swapi.dev/api/people/?page='
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
    name[i].innerHTML = `Name: <strong>${resp.results[i].name}</strong>`
    characterHeight[i].innerHTML = `Height: <strong>${resp.results[i].height}cm</strong>`
    characterGender[i].innerHTML = `Gender: <strong>${resp.results[i].gender}</strong>`
  }

}

getData()

const next = document.querySelector('#next')
const prev = document.querySelector('#previous')
let pageNum = document.querySelector('#pageNum');
let page = 1
let numberOfPages = 9;
pageNum.innerHTML = `${ page}`


nextPage = () => {
  page++
  if (page > 9) {
    page = 9
    alert('You have reached the last page')
  }
}
prevPage = () => {
  page--
  if (page < 1) {
    page = 1
  }
}

next.addEventListener('click', evt => {
  evt.preventDefault()
  nextPage()

  getData(page)
  pageNum.innerHTML = `${ page}`

})

prev.addEventListener('click', evt => {
  evt.preventDefault()
  prevPage()

  getData(page)
  pageNum.innerHTML = `${ page}`
})