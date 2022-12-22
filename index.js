const career = document.getElementById('career')
const open = document.getElementById('open')
const close = document.getElementById('close')
const navbar = document.querySelector('.nav-links')


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY > 100)
})

career.onclick = () => {
    career.style.color = "red"
}

open.onclick = () => {
    close.style.display = 'flex'
    open.style.display = 'none'
   navbar.style.display = 'inline-block'
}

close.onclick = () => {
    close.style.display = 'none'
    open.style.display = 'flex'
   navbar.style.display = 'none'
}



