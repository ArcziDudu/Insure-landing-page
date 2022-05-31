const bar = document.querySelector('.bar');
const shadow = document.querySelector('.shadow-mobile');
const closeMenu = document.querySelector('.close');

const openMenu = () =>{
    shadow.style.display = 'block';
    closeMenu.style.display = 'block';
}
const closeShadow = () =>{
    shadow.style.display = 'none';
    closeMenu.style.display = 'none';
}
shadow.addEventListener('click', closeShadow);
closeMenu.addEventListener('click', closeShadow);
bar.addEventListener('click', openMenu);