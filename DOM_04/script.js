// var elem1 = document.querySelector("#elem1")
// var elemImg = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(dets){
//     elemImg.style.left = dets.x +"px"
//     elemImg.style.top = dets.y +"px"
// })
// elem1.addEventListener("mouseenter",function(dets){                    Here we using simplifiying and applying for only one id 
//     elemImg.style.opacity = 1
// })
// elem1.addEventListener("mouseleave",function(dets){
//     elemImg.style.opacity = 0
// })



 //                    to apply whole elems we use forEach loop

 var elem = document.querySelectorAll(".elem")

 elem.forEach(function(val){

    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1                                                     //here 3 refers for img ,   1 - h1
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0                                                     //here 3 refers for img ,   1 - h1
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left =dets.x +"px"
        // val.childNodes[3].style.top =dets.y +"px"
    })
 })
    
 