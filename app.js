
// Taking constant for short cut (global constant?)
const colors = ["green", "red", "blue", "orange", "Black", "grey", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');



// Creating coloring changing Method

btn.addEventListener('click', function() {
    //taking local const

    const randomNumber = getRandonNumber();

    //event response

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

// Creating main function
function getRandonNumber() {
   return Math.floor(Math.random()*colors.length); 
}




