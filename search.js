const products = [
{
  name: 'dinning table set',
  id: 1,
  price: 90,
  category: 'table',
  image_url: 'images/dinning-set.png',

  color: ['white', 'brown', 'black']

},
{
  name: 'reading table',
  id: 2,
  price: 40,
  image_url: 'images/Reading-table.jpg',
  category: 'room',
  color: ['brown', 'black', 'beige']

},
{
  name: 'dinning table',
  id: 3,
  price: 120,
  category: 'dinning',
  image_url: 'images/minimalist-table.png',
  color: ['white', 'brown', 'black']

},
{
  name: 'Bed',
  id: 4,
  price: 280,
  category: 'bedroom',
  image_url: 'images/bedroom1.png',
  color: ['brown', 'black', 'gray', 'blue']

},
{
  name: 'minimalist bed',
  id: 5,
  price: 145,
  category: 'bedroom',
  image_url: 'images/bedroom2.png',
  color: ['brown', 'black']

},
{
  name: 'wooden dinning table',
  id: 6,
  price: 180,
  category: 'table',
  image_url: 'images/complete-dinner.png',
  color: [ 'brown', 'black']

},
{
  name: 'kitchen hanger',
  id: 7,
  price: 35,
  category: 'kitchen',
  image_url: 'images/kitchen-hanger.png',
  color: ['white', 'brown', 'black']

},
{
  name: '5 seater sofa',
  id: 8,
  price: 390,
  category: 'living-room',
  image_url: 'images/5-seater-sofa.png',
  color: ['white', 'brown', 'black']

},

]

let productArr = products;





const showProducts = ()=>{



const container = document.querySelector('.contain');
container.innerHTML = ''

const count = document.querySelector('.count');
  count.innerHTML = productArr.length;


productArr.map((product)=>{
  const newProduct = document.createElement('div');




  newProduct.innerHTML = (` 
 <div class="row">
 <div class="col">
<div class="card">
<img src='${product.image_url}' alt=''>
<h3>${product.category}</h3>
<p>${product.name}</p>
</div>
 </div>
 </div>
  `)
  container.append(newProduct)

})

}

showProducts()



const form = document.querySelector('.form');

form.addEventListener('submit', (e)=>{

e.preventDefault();
const inputCheck = e.target;
productArr = products.filter((product)=>{
  if(inputCheck.search.value != ''){
if(!product.name.toUpperCase().includes(inputCheck.search.value.toUpperCase())){
  return false;
}
  }
  return true;
})

 showProducts(productArr);

})


