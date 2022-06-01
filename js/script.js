const body = document.querySelector('body')
const toggle = document.getElementById('c-toggle');

toggle.onclick = function() {
    toggle.classList.toggle('active')
    body.classList.toggle('active')
}