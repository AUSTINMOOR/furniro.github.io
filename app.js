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
    menu.style.backdropFilter = 'blur(20px)';
    menu.style.boxShadow = '10px 10px 30px rgba(0,0,0,0.2)';    
  }   else{
    menu.style.background ='white'
    menu.style.boxShadow = 'none'
  }
})


// QUICK NAV SECTION...........

// SEARCH BAR
const searchBar = document.querySelector('.search');
const searchModal = document.querySelector('.search-modal')
const closeSearchModal = document.querySelector('#close-search');
const searchBarClicked = ()=>{
searchModal.style.display = 'block';
document.querySelector('.modal-layer').style.display ='block'
}
searchBar.addEventListener('click', searchBarClicked)

// close search bar

const searchModalClosed = ()=>{
  searchModal.style.display = 'none';
document.querySelector('.modal-layer').style.display ='none';
  console.log(searchModal);
}
closeSearchModal.addEventListener('click', searchModalClosed);

// END OF SEARCH MODAL



// search input

const form = document.getElementById('my-form');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
})

const inputFocused = ()=>{
  
  const searchBar = document.getElementById('search-box').value.toUpperCase();
  const products = document.querySelectorAll('.card');
  const productsName = document.getElementsByTagName('h4');

  for(let i = 0; i < productsName.length; i++){
let match = products[i].getElementsByTagName('h4')[0];
if(match){
let textValue = match.textContent || match.innerHTML;
if(textValue.toUpperCase().indexOf(searchBar) > -1){
  products[i].style.display = 'block';
  document.querySelector('.search-count').style.display = 'none'
}else{
products[i].style.display = 'none';
}
}
  }
}







// ADD TO CART SECTION ROOM INSPIRATION SECTION








// BEAUTIFUL INSPIRATION SECTION

const activateScroll = ()=>{
  const imageList = document.querySelector('.image-list');
  const nextPrevButtons = document.querySelectorAll('.scroll-btn');
  const radioButtons = document.querySelectorAll('#radio-btn');


  // get next and prev buttons 
  nextPrevButtons.forEach((button)=>{
button.addEventListener('click', ()=>{
  const buttonDirection = button.id === 'prev-btn'? -1: 1;
const imageDirection = buttonDirection* imageList.clientWidth;
imageList.scrollBy({left: imageDirection, behavior: 'smooth'});
})
})


// 
const maximumScroll = imageList.scrollWidth * imageList.scrollLeft;

const checkScroll = ()=>{
  nextPrevButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
  nextPrevButtons[1].style.display = maximumScroll > 0 ? 'none' : 'block';

}

imageList.addEventListener('scroll', ()=>{
  checkScroll();
})

// front and back buttons ended

radioButtons.forEach((button)=>{
button.addEventListener('click', (event)=>{
let buttonDirection;


switch (button.className) {
  case 'first-btn':
    buttonDirection = -1;
    break;
  default:
    buttonDirection = 1;
}


const imageDirection = buttonDirection * imageList.clientWidth

console.log(imageDirection)
imageList.scrollBy({left: imageDirection, behavior: 'smooth'});
})
})

}

activateScroll();




