let randomnumb=Math.floor(Math.random()*6)+1
let randomdiceimage="dice"+randomnumb+".png"
let imageselect="images/"+randomdiceimage

let image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",imageselect)

let randomnumb2=Math.floor(Math.random()*6)+1
let imageselect2="images/"+"dice"+randomnumb2+".png"
let image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",imageselect2)

let play=document.querySelector("h1")
if(randomnumb>randomnumb2){
    play.innerText="Player1 Wins"
}
else if(randomnumb<randomnumb2){
    play.innerText="Player2 Wins"
}
else{
    play.innerText="Draw"
}