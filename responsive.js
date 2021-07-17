let hamburger = document.getElementById('hamburger');
let navbar = document.getElementById('navbar');
let listItems = document.getElementById('list-items');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('heightClass');
    listItems.classList.toggle('visibilityClass');
})