var a = document.querySelector("h5")
var add = document.querySelector("#btn2")
var check = 0 

add.addEventListener("click",function(){
    if(check == 0){ 
         a.innerHTML ="Friends"
    a.style.color="green"
    add.innerHTML="Remove"
    check = 1
}
else{
    a.innerHTML ="Stranger"
    a.style.color="red"
    check = 0
    add.innerHTML="Add Friend"

}

  
})
