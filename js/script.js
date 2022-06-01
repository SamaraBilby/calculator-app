const body = document.querySelector('body')
const topo = document.getElementById('c-topo')
const input = document.getElementById('c-input')
const toggle = document.getElementById('c-toggle');
const button =document.getElementById('c-button')

toggle.onclick = function() {
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    topo.classList.toggle('active')
    input.classList.toggle('active')
    button.classList.toggle('active')
}