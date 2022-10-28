// console.log('hello')
let bars =  document.querySelector('.bar')
let side = document.querySelector('.mySideNav');
let closemenu = document.querySelector('.close')
let interior = document.querySelector('.interior')


// bars.addEventListener('click', function(){

// })
console.log(closemenu)
bars.onclick = function () {
    side.style.display = 'block';
    side.style.width = '80%'
    

}
https://github.com/Omoleiruafemi/Aneeka_interiors-

closemenu.onclick = function() {
    side.style.display = 'none';
    // console.log('helloo')
}
interior.onclick = function() {
    // side.style.display = 'none';
    // console.log('helloo')
}