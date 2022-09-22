const toggleButton = document.querySelector('.toggle-button');
const links = document.querySelector('.links');

toggleButton.addEventListener('click',()=>{
    links.classList.toggle('active');
})
