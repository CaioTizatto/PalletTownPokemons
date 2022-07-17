var experience = document.getElementById('xp')
var image = document.getElementById('pokepicture')
var poke = document.getElementById('poke')
function verify() {    
    var type = document.getElementsByName('radpoke')
    var typeIs = ""
    image.classList.remove("hidden")
    //veryfication by input radio
    if (type[0].checked){
        typeIs = "fire"
    } else if(type[1].checked){
        typeIs = "water"
    }
    else{
        typeIs = "grass"
    }
    if(experience.value == 1 && typeIs =="fire" ){
        poke.innerText="It's a Charmander!"
        image.src="charmander.png"
        document.body.style.backgroundColor="#DAA57B"
    }else if (experience.value == 2 && typeIs =="fire") {
        poke.innerText="It's a Charmeleon!"
        image.src="charmeleon.png"        
        document.body.style.backgroundColor="#DAA57B"
    }else if (experience.value == 3 && typeIs =="fire") {
        poke.innerText="It's a Charizard!"
        image.src="charizard.png"        
        document.body.style.backgroundColor="#DAA57B"
    }else if (experience.value == 1 && typeIs =="grass") {
        poke.innerText="It's a bulbasaur!"
        image.src="bulbasaur.png"        
        document.body.style.backgroundColor="#399A8F"
    }else if (experience.value == 2 && typeIs =="grass") {
        poke.innerText="It's an ivysaur!"
        image.src="ivysaur.png" 
        document.body.style.backgroundColor="#399A8F"
    }else if (experience.value == 3 && typeIs =="grass") {
        poke.innerText="It's a venusaur!"
        image.src="venusaur.png" 
        document.body.style.backgroundColor="#399A8F"
    }else if (experience.value == 1 && typeIs =="water") {
        poke.innerText="It's a squirtle!"
        image.src="squirtle.png" 
        document.body.style.backgroundColor="#5781B3"
    }else if (experience.value == 2 && typeIs =="water") {
        poke.innerText="It's a wartortle!"
        image.src="wartortle.png" 
        document.body.style.backgroundColor="#5781B3"
    }else if (experience.value == 3 && typeIs =="water") {
        poke.innerText="It's a blastoise!"
        image.src="blastoise.png" 
        document.body.style.backgroundColor="##5781B3"
    }
    
}