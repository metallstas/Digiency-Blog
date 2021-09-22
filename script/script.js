const btn = document.querySelector('.nav__button')
const header = document.querySelector('.header')


  btn.addEventListener('click', (e) => {
    header.classList.toggle('open')
  })
