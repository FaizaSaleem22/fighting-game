var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var left = 0
var right = 0
function animateChar(){
    console.log(event.keyCode)
    if(event.keyCode == 39 && left<1791){
        left += 10
        char1.style.left = left+"px"
        char1.style.transform = "scaleX(1)"
        char1.src="assets/images/alicewf.gif"
        setTimeout(()=> {
            char1.src="assets/images/alicestance.gif"
        },2000)
    }
    if(event.keyCode == 37 && left>29){
        left = left-10
        char1.style.left = left+"px"
        char1.style.transform = "scaleX(-1)"
        char1.src="assets/images/alicewf.gif"
        setTimeout(()=> {
            char1.src="assets/images/alicestance.gif"
        },1500)
    }
    if(event.keyCode == 32){
        char1.src = "assets/images/alice-doubleprojectile.gif"
        char1.style.height = "270px"
        setTimeout(() => {
            char1.src = "assets/images/alicestance.gif"
            char1.style.height = "200px"
        },2600)
    }
    if(event.keyCode == 38 && right<1791){
        right += 10
        char2.style.right = right+"px"
        char2.style.transform = "scaleX(-1)"
        char2.src="assets/images/alfred-walk.gif"
        setTimeout(()=> {
            char2.src="assets/images/alfred-realstance1.gif"
        },2000)
    }
    if(event.keyCode == 40 && right>29){
        right = right-10
        char2.style.right = right+"px"
        char2.style.transform = "scaleX(1)"
        char2.src="assets/images/alfred-walk.gif"
        setTimeout(()=> {
            char2.src="assets/images/alfred-realstance1.gif"
        },1500)
    }
    if(event.keyCode == 13){
        char2.src = "assets/images/alfred-backhand.gif"
        
        setTimeout(() => {
            char2.src = "assets/images/alfred-realstance1.gif"
        },1400)
    }
}
window.onkeydown = animateChar