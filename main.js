const bar = document.querySelector('.bar-menu');
const shadowMenu = document.querySelector('.bar-container');
const closeMenu = document.querySelector('.close-menu');


const open = () =>{
    shadowMenu.style.display = 'block';
    closeMenu.style.display = 'block';
}
const close = () =>{
    shadowMenu.style.display = 'none';
    closeMenu.style.display = 'none';
}

shadowMenu.addEventListener('click', close)

closeMenu.addEventListener('click', close)

bar.addEventListener('click', open)