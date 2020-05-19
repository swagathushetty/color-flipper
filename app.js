const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn=document.querySelector('.btn')
const color=document.querySelector('.color')

btn.addEventListener('click',()=>{
    //get random nio between 0-3 aka array of colors
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber]
    color.textContent=colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}