var con =document.querySelector(".container")
var love = document.querySelector("i")
con.addEventListener("dblclick",function(){
   love.style.transform =  ' translate(-50%,-50%) scale(2)'
    love.style.opacity=0.7
   setTimeout(function(){
    love.style.opacity= 0;
   },1000)


   setTimeout(function(){
    love.style.transform =  ' translate(-50%,-50%) scale(0)'
   },1700)
})
//Dely means SetTime


