const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

let isActive = false

btnHamburger.addEventListener('click', () => {
  isActive = !isActive

  header.classList.toggle('open')
  overlay.classList.toggle('fade-in', isActive)
  overlay.classList.toggle('fade-out', !isActive)
})