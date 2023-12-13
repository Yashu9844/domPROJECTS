var main = document.querySelector(".main")
var crs =document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
    crs.style.left= dets.x + "px"                                       //It only Works If cursor position is absolute
    crs.style.top = dets.y + "px"
})