const menuButton = document.querySelector('.menu-btn #open');
const menu = document.querySelector('header');
const closedBtn = document.querySelector('#close')
const header = document.querySelector('header')


const toggleMenu = ()=>{

  menu.classList.toggle('active')
  menuButton.classList.toggle('active')
  closedBtn.classList.toggle('active')
}
menuButton.addEventListener('click', toggleMenu);
closedBtn.addEventListener('click',toggleMenu);


// scroll section 
document.addEventListener('scroll', ()=>{
  if(scrollY > 600){
    menu.style.backdropFilter = 'blur(10px)';
    menu.style.background = 'transparent';
    menu.style.boxShadow = '10px 10px 30px rgba(0,0,0,0.2)';    
  }   else{

    menu.style.background ='white'
    menu.style.boxShadow = 'none'
    // menu.style.display = 'block'

  }
})


// ADD TO CART SECTION ROOM INSPIRATION SECTION








// BEAUTIFUL 




