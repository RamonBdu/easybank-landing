const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const body = document.querySelector('body')
const fadeElems = document.querySelectorAll('.has-fade')

let isActive = false

btnHamburger.addEventListener('click', () => {
  isActive = !isActive

  body.classList.toggle('noscroll')
  header.classList.toggle('open')

  fadeElems.forEach(elem => {
    elem.classList.toggle('fade-in', isActive)
    elem.classList.toggle('fade-out', !isActive)
  })
})